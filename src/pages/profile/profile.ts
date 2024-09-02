import Icon from "../../images/profile/avatar.svg";
import Block from "../../core/Block";
import {
  ProfileButton,
  ProfileField,
  ProfileLink,
  ProfileSubmit,
} from "../../components";

type ProfileFieldProps = {
  disabled: boolean;
  name: string;
  label: string;
  type: string;
  value: string;
  fieldname: string;
  pattern: string;
}

type ProfilePageProps = {
  profile: {
    fields: ProfileFieldProps[]
  }
}

export default class ProfilePage extends Block<ProfilePageProps> {
  declare ProfileFields: Record<string, ProfileField>[];

  // declare props: {
  //   profile: {
  //     fields: Array<{
  //       disabled: boolean;
  //       name: string;
  //       label: string;
  //       type: string;
  //       value: string;
  //       fieldname: string;
  //       pattern: string;
  //     }>;
  //   };
  //   [key: string]: object
  // }

  constructor(props: ProfilePageProps) {
    super({
      ...props,
      profile: {
        fields: [
          {
            disabled: true,
            name: "email",
            label: "E-mail",
            type: "email",
            value: "applexrum@yandex.ru",
            fieldname: "EmailField",
            pattern: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
          },
          {
            disabled: true,
            name: "login",
            label: "Логин",
            type: "text",
            value: "AppleXrum",
            fieldname: "LoinField",
            pattern: "^(?=.*[a-zA-Z])[a-zA-Z0-9_-]{3,20}$",
          },
          {
            disabled: true,
            name: "second_name",
            label: "Фамилия",
            type: "text",
            value: "Сластихин",
            fieldname: "SecondNameField",
            pattern: "^[А-ЯЁA-Z][а-яёА-ЯЁa-zA-Z-]*$",
          },
          {
            disabled: true,
            name: "first_name",
            label: "Имя",
            type: "text",
            value: "Константин",
            fieldname: "FirstNameField",
            pattern: "^[А-ЯЁA-Z][а-яёА-ЯЁa-zA-Z-]*$",
          },
          {
            disabled: true,
            name: "display_name",
            label: "Имя в чате",
            type: "text",
            value: "AppleXrum",
            fieldname: "DisplayNameField",
            pattern: "^(?=.*[a-zA-Z])[a-zA-Z0-9_-]{3,20}$",
          },
          {
            disabled: true,
            name: "phone",
            label: "Телефон",
            type: "tel",
            value: "+79128243181",
            fieldname: "PhoneField",
            pattern: "^\\+?\\d{10,15}$",
          },
        ],
      },
    });
  }

  init() {
    this.ProfileFields = this.props.profile.fields.map((field) => ({
      [field.fieldname]: new ProfileField({ ...field }),
    }));

    const EditButton = new ProfileButton({
      text: "Изменить данные",
      events: {
        click: this.handleClickEditButton.bind(this),
      },
      active: true,
    });

    const EditPasswordButton = new ProfileButton({
      text: "Изменить пароль",
      active: true,
    });

    const SubmitButton = new ProfileSubmit({
      active: false,
      events: {
        click: this.handleClickSubmitButton.bind(this),
      },
    });

    const ReadyProfileLink = new ProfileLink({
      active: true,
    });

    this.children = {
      ...this.children,
      ...this.ProfileFields.reduce((e, acc) => ({ ...acc, ...e }), {}),
      EditButton,
      EditPasswordButton,
      SubmitButton,
      ReadyProfileLink,
    };
  }

  handleClickEditButton(event: Event) {
    event.preventDefault();

    this.children.EditButton.setProps({ active: false });
    this.children.EditPasswordButton.setProps({ active: false });
    this.children.ReadyProfileLink.setProps({ active: false });
    this.children.SubmitButton.setProps({ active: true });

    this.ProfileFields.forEach((field) => {
      Object.values(field)[0].setProps({ disabled: false });
    });
  }

  handleClickSubmitButton(event: Event) {
    event.preventDefault();

    const res: { [key: string]: string } = {};
    const inputList = Array.from(
      document.querySelectorAll(".profile__form input"),
    );
    inputList.forEach((input) => {
      input.dispatchEvent(new Event("blur"));
    });
    const pass = inputList.every((input) => {
      const { name, value }: {
        name: string,
        value: string
      } = input as HTMLInputElement;
      if (!value) return false;
      res[name] = value;
      return !input.classList.contains("profile__input_error");
    });

    if (!pass) {
      // eslint-disable-next-line no-console
      console.log("Данные не прошли валидацию");
      return;
    }

    // eslint-disable-next-line no-console
    console.log(res);

    this.children.EditButton.setProps({ active: true });
    this.children.EditPasswordButton.setProps({ active: true });
    this.children.ReadyProfileLink.setProps({ active: true });
    this.children.SubmitButton.setProps({ active: false });

    this.ProfileFields.forEach((field) => {
      Object.values(field)[0].setProps({ disabled: true });
    });
  }

  render() {
    return `
        <main class="main page-profile">
          <div class="profile">
            <div class="profile__image-container">
              <img class="profile__image" src="${Icon}" alt="" />
            </div>
            <p class="profile__name">Константин</p>
            <form class="profile__form">
              ${this.ProfileFields.map((field) => `{{{ ${Object.keys(field)} }}}`).join("")}
              {{{ EditButton }}}
              {{{ EditPasswordButton }}}
              {{{ SubmitButton }}}
            </form>
            {{{ ReadyProfileLink }}}
          </div>
          <a class="button-back" href="/"></a>
        </main>
      `;
  }
}

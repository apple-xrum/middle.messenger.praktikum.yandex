import { Sign } from "../../components";
import Block from "../../core/Block";

export default class SignUpPage extends Block {
  constructor(props) {
    super({
      ...props,
      Sign: new Sign({
        content: {
          title: "Регистрация",
          subtext: "Пожалуйста, создайте свой аккаунт",
          fields: [
            {
              name: "email",
              label: "E-mail",
              type: "email",
              fieldname: "EmailField",
              pattern: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$",
            },
            {
              name: "login",
              label: "Логин",
              type: "text",
              fieldname: "LoginField",
              pattern: "^(?=.*[a-zA-Z])[a-zA-Z0-9_-]{3,20}$",
            },
            {
              name: "second_name",
              label: "Фамилия",
              type: "text",
              fieldname: "SecondNameField",
              pattern: "^[А-ЯЁA-Z][а-яёА-ЯЁa-zA-Z-]*$",
            },
            {
              name: "first_name",
              label: "Имя",
              type: "text",
              fieldname: "FirstNameField",
              pattern: "^[А-ЯЁA-Z][а-яёА-ЯЁa-zA-Z-]*$",
            },
            {
              name: "phone",
              label: "Телефон",
              type: "tel",
              fieldname: "PhoneField",
              pattern: "^\\+?\\d{10,15}$",
            },
            {
              name: "password",
              label: "Пароль",
              type: "password",
              fieldname: "PasswordField",
              pattern: "^(?=.*[A-Z])(?=.*\\d).{8,40}$",
            },
            {
              name: "confirm-password",
              label: "Подтвердите пароль",
              type: "password",
              fieldname: "ConfirmPasswordField",
              pattern: "^(?=.*[A-Z])(?=.*\\d).{8,40}$",
            },
          ],
          submitText: "Регистрация",
          redirection: {
            href: "/signin/",
            title: "Войти",
          },
        },
      }),
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return `
        <main class="main">
          {{{ Sign }}}
        </main>
      `;
  }
}

import { Sign } from '../../components';
import Block from '../../core/Block';

export default class SignUpPage extends Block {
  constructor(props){
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
              fieldname: "EmailField"
            },
            {
              name: "login",
              label: "Логин",
              type: "text",
              fieldname: "LoginField"
            },
            {
              name: "second_name",
              label: "Фамилия",
              type: "text",
              fieldname: "SecondNameField"
            },
            {
              name: "first_name",
              label: "Имя",
              type: "text",
              fieldname: "FirstNameField"
            },
            {
              name: "phone",
              label: "Телефон",
              type: "tel",
              fieldname: "PhoneField"
            },
            {
              name: "password",
              label: "Пароль",
              type: "password",
              fieldname: "PasswordField"
            },
            {
              name: "confirm-password",
              label: "Подтвердите пароль",
              type: "password",
              fieldname: "ConfirmPasswordField"
            },
          ],
          submit: "Регистрация",
          redirection: {
            href: "/signin/",
            title: "Войти",
          },
        },
      }),
    });
  }

  render()  {
      return `
        <main class="main">
          {{{ Sign }}}
        </main>
      `
  }
}
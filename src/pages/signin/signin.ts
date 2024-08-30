import { Sign } from '../../components';
import Block from '../../core/Block';

export default class SignInPage extends Block {
  constructor(props){
    super({
      ...props,
      Sign: new Sign({
        content: {
          title: "Вход",
          subtext: "Пожалуйста, войдите в свой аккаунт",
          fields: [
            {
              name: "login",
              label: "Логин",
              type: "text",
              fieldname: "LoginField"
            },
            {
              name: "password",
              label: "Пароль",
              type: "password",
              fieldname: "PasswordField"
            },
          ],
          submit: "Войти",
          redirection: {
            question: "Нет аккаунта?",
            href: "/signup/",
            title: "Регистрация",
          },
        },
      })
    })
  }

  render()  {
      return `
        <main class="main">
          {{{ Sign }}}
        </main>
      `
  }
}
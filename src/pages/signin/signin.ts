import { Sign } from "../../components";
import Block from "../../core/Block";

type SignInPageProps = {
  Sign: Sign;
}

export default class SignInPage extends Block<SignInPageProps> {
  constructor(props: SignInPageProps) {
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
              fieldname: "LoginField",
              pattern: "^(?=.*[a-zA-Z])[a-zA-Z0-9_-]{3,20}$",
            },
            {
              name: "password",
              label: "Пароль",
              type: "password",
              fieldname: "PasswordField",
              pattern: "^(?=.*[A-Z])(?=.*\\d).{8,40}$",
            },
          ],
          submitText: "Войти",
          redirection: {
            question: "Нет аккаунта?",
            href: "/sign-up",
            title: "Регистрация",
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

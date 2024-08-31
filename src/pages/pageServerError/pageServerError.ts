import { ErrorPartial } from "../../components";
import Block from "../../core/Block";

export default class PageServerError extends Block {
  constructor(props) {
    super({
      ...props,
      ErrorServer: new ErrorPartial({
        code: 500,
        text: "Ошибка сервера",
      }),
    });
  }

  render() {
    return `
        <main class="main">
          {{{ ErrorServer }}}
        </main>
      `;
  }
}

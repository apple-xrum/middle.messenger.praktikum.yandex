import { ErrorPartial } from "../../components";
import Block from "../../core/Block";

export default class PageServerError extends Block {
  constructor(props: object) {
    super({
      ...props,
      ErrorServer: new ErrorPartial({
        code: 500,
        text: "Ошибка сервера",
      }),
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return `
        <main class="main">
          {{{ ErrorServer }}}
        </main>
      `;
  }
}

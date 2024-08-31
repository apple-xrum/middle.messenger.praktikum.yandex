import { ErrorPartial } from "../../components";
import Block from "../../core/Block";

export default class PageNotFound extends Block {
  constructor(props) {
    super({
      ...props,
      ErrorNotFound: new ErrorPartial({
        code: 404,
        text: "Страница не найдена",
      }),
    });
  }

  render() {
    return `
        <main class="main">
          {{{ ErrorNotFound }}}
        </main>
      `;
  }
}

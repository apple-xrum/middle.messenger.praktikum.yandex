import { ErrorPartial } from "../../components";
import Block from "../../core/Block";

export default class PageNotFound extends Block<any> {
  constructor(props) {
    super({
      ...props,
      ErrorNotFound: new ErrorPartial({
        code: 404,
        text: "Страница не найдена",
      }),
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return `
        <main class="main">
          {{{ ErrorNotFound }}}
        </main>
      `;
  }
}

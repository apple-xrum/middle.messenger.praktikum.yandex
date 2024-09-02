import { ErrorPartial } from "../../components";
import Block from "../../core/Block";

type PageServerErrorProps = {
  ErrorServer: ErrorPartial;
};

export default class PageServerError extends Block<PageServerErrorProps> {
  constructor(props: PageServerErrorProps) {
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

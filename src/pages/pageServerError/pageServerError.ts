import { ErrorPartial } from "../../components";
import Block from "../../core/Block";

type Props = Record<string, Block>;
export default class PageServerError extends Block<Props> {
  constructor(props: Props) {
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

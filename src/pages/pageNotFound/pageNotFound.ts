import { ErrorPartial } from "../../components";
import Block from "../../core/Block";

type Props = Record<string, Block>;

export default class PageNotFound extends Block<Props> {
  constructor(props: Props) {
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

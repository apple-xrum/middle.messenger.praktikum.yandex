import Block from "../../core/Block";
import { ChatList } from "../chat-list";

export default class Sidebar extends Block<any> {
  constructor(props) {
    super({
      ...props,
      ChatList: new ChatList({
        chats: props.chats,
      }),
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return `
      <section class="sidebar">
        <a class="sidebar__link" href="/profile/">Профиль</a>
        <input class="sidebar__search"  type="text" placeholder="🔍 Поиск" />
        {{{ ChatList }}}
      </section>
    `;
  }
}

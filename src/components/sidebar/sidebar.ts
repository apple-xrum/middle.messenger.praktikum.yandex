import Block from "../../core/Block";
import { ChatList } from "../chat-list";

type ChatItemProps = {
  message: string;
  name: string;
  image: string;
  date: string;
  unreadMessage?: number,
}

type Props = {
  ChatList?: ChatList;
  chats: ChatItemProps[]
}

export default class Sidebar extends Block<Props> {
  constructor(props: Props) {
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

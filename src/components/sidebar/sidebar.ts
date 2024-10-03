import Block from "../../core/Block";
import { Button } from "../button";
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

  init() {
    const handleLinkClickReady = this.handleLinkClick.bind(this)
    const ButtonLinkToProfilePage = new Button({
      text: "Профиль",
      class: 'sidebar__link',
      onClick: handleLinkClickReady
    })
    this.children = {
      ...this.children,
      ButtonLinkToProfilePage
    }
  }

  handleLinkClick(event: Event): void {
    event.preventDefault();

    window.router.go("/settings")
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return `
      <section class="sidebar">
        {{{ ButtonLinkToProfilePage }}}
        <input class="sidebar__search"  type="text" placeholder="🔍 Поиск" />
        {{{ ChatList }}}
      </section>
    `;
  }
}

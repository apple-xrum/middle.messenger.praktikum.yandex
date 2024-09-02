import Block from "../../core/Block";
import { ChatItem } from "../chat-item";

type ChatItemProps = {
  message: string;
  name: string;
  image: string;
  date: string;
  unreadMessage?: number,
}

type ChatListProps = {
  chats: ChatItemProps[]
}

export default class ChatList extends Block<ChatListProps> {

  init() {
    const FormFields = this.props.chats.map((chat, i: number) => ({
      [i]: new ChatItem({ ...chat }),
    }));

    this.children = {
      ...this.children,
      ...FormFields.reduce((e:{ [key: number]: ChatItem}, acc: { [key: number]: ChatItem }) => ({ ...acc, ...e }), {}),
    };
  }

  render() {
    return `
        <ul class="chat-list">
          ${Object.keys(this.children)
    .map((key) => `{{{ ${key} }}}`)
    .join("")}
        </ul>
      `;
  }
}

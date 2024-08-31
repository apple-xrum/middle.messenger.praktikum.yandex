import Block from "../../core/Block";
import { ChatItem } from "../chat-item";

export default class ChatList extends Block {
  declare props: {
    [key: string]: string | { [key: string]: string }[];
    chats: {
      [key: string]: string;
    }[];
  };

  init() {
    const FormFields = this.props.chats.map((chat: { [key: string]: string}, i: number) => ({
      [i]: new ChatItem({ ...chat }),
    }));

    this.children = {
      ...this.children,
      ...FormFields.reduce((e:{ [key: string]: Block}, acc: { [key: string]: Block }) => ({ ...acc, ...e }), {}),
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

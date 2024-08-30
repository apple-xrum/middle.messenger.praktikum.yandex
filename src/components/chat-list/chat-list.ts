import Block from "../../core/Block";
import { ChatItem } from "../chat-item";

export default class ChatList extends Block{
  init() {
    let FormFields = this.props.chats.map((chat, i) => ({[i]: new ChatItem({...chat})}))

    this.children = {
      ...this.children,
      ...(FormFields.reduce((e, acc) => ({...acc, ...e}), {})),
    }

  }


  render() {
      return `
        <ul class="chat-list">
          ${Object.keys(this.children).map(key => `{{{ ${key} }}}`).join("")}
        </ul>
      `;
  }
}
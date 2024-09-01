import Block from "../../core/Block";

export default class ChatFooter extends Block<any> {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return `
      <form class="chat__footer">
        <button class="chat__file"></button>
        <input class="chat__message" type="text" placeholder="Сообщение" name="message">
        <button class="chat__send" type="submit"></button>
      </form>
      `;
  }
}

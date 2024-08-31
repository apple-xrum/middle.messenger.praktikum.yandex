import Icon from "../../images/chat/icon-chat.svg";
import Block from "../../core/Block";
import { ChatFooter } from "../chat__footer";

export default class Chat extends Block {
  declare children: {
    ReadyChatFooter: ChatFooter
    [key: string]: Block;
  };

  init() {
    const ReadyChatFooter = new ChatFooter({
      events: {
        submit: this.handleSubmit.bind(this),
      },
    });

    this.children = {
      ...this.children,
      ReadyChatFooter,
    };
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    const res: { [key: string]: string } = {};
    const inputList = this.children.ReadyChatFooter.element ? Array.from((this.children.ReadyChatFooter.element as Element).querySelectorAll("input")) : [];

    const pass = inputList.every((input) => {
      const { name, value } = input as HTMLInputElement;
      if (!value) return false;
      res[name] = value;
      return true;
    });

    if (!pass) {
      // eslint-disable-next-line no-console
      console.log("Данные не прошли валидацию");
      return;
    }

    // eslint-disable-next-line no-console
    console.log(res);
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return `
        <section class="chat {{#if active}}chat_active{{/if}}">
          {{#if active}}
            <div class="chat__header">
              <img class="chat__avatar" src="{{image}}" alt="">
              <p class="chat__name">{{name}}</p>
              <button class="chat__options"></button>
            </div>
            {{{ ReadyChatFooter }}}
          {{else}}
          <div class="chat__empty">
            <img class="chat__image" src="${Icon}" alt="">
            <p class="chat__text">Выберите чат, чтобы отправить сообщение</p>
          </div>
          {{/if}}
        </section>
      `;
  }
}

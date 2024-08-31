import Icon from "../../images/chat/icon-chat.svg"
import Block from "../../core/Block";
import { ChatFooter } from "../chat__footer";

export default class Chat extends Block {
  init() {
      const ReadyChatFooter = new ChatFooter({
        events: {
          submit: this.handleSubmit.bind(this)
        }
      })

      this.children = {
        ...this.children,
        ReadyChatFooter
      }
  }

  handleSubmit(event) {
    event.preventDefault();
    let res = {};
    const inputList = Array.from(this.children.ReadyChatFooter.element.querySelectorAll("input"));

    const pass = inputList.every(input => {
      const { name, value } = input;
      if(!value) return false
      res[name] = value;
      return true
    })

    if(!pass){
      console.log("Данные не прошли валидацию")
      return
    }

    console.log(res)
  }

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

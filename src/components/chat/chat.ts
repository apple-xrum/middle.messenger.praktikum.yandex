import Icon from "../../images/chat/icon-chat.svg"
import Block from "../../core/Block";

export default class Chat extends Block {
  render() {
    return `
        <section class="chat">
          {{#if active}}
            <div class="chat__header">
              <img class="chat__image" src="" alt="">
              <p class="chat__name"></p>
              <button class="chat__options"></button>
            </div>
            {{> messages messages=messages}}
            <form class="chat__footer">
              <button class="chat__file"></button>
              <input class="chat__message" type="text" placeholder="Сообщение" name="message">
              <button class="chat__send"></button>
            </form>
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

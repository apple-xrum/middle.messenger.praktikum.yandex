import Block from "../../core/Block";

type ChatItemProps = {
  message: string;
  name: string;
  image: string;
  date: string;
  unreadMessage?: number,
}

export default class ChatItem extends Block<ChatItemProps> {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return `
        <li class="chat-list__chat-item chat-item">
          <img class="chat-item__image" src="{{image}}" alt="Фотография профиля {{name}}">
          <div class="chat-item__content">
            <p class="chat-item__name">{{name}}</p>
            <p class="chat-item__last-message">{{message}}</p>
          </div>
          <div class="chat-item__status">
            <p class="chat-item__date">{{date}}</p>
            {{#if unreadMessage}}
              <p class="chat-item__unread-counter">{{unreadMessage}}</p>
            {{/if}}
          </div>
        </li>
      `;
  }
}

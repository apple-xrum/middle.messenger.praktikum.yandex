import Block from '../../core/Block';

export default class ChatItem extends Block {
  init() {
  }

  render() {
    return `
        <li class="chat-list__chat-item chat-item">
          <img class="chat-item__image" src="{{this.image}}" alt="Фотография профиля {{this.name}}">
          <div class="chat-item__content">
            <p class="chat-item__name">{{this.name}}</p>
            <p class="chat-item__last-message">{{this.message}}</p>
          </div>
          <div class="chat-item__status">
            <p class="chat-item__date">{{this.date}}</p>
            {{#if this.unreadMessage}}
              <p class="chat-item__unread-counter">{{this.unreadMessage}}</p>
            {{/if}}
          </div>
        </li>
      `;
  }
}

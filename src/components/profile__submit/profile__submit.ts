import Block from "../../core/Block";

export default class ProfileSubmit extends Block<any> {

  // eslint-disable-next-line class-methods-use-this
  render() {
    return `
        <button class="profile__submit {{#if active}}profile__submit_active{{/if}}">Сохранить</button>
      `;
  }
}

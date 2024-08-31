import Block from "../../core/Block";

export default class ProfileButton extends Block {
  // eslint-disable-next-line class-methods-use-this
  componentDidUpdate(oldProps: object, newProps: object): boolean {
    if (oldProps === newProps) {
      return false;
    }

    return true;
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return `
      <button class="profile__button {{#if active}}profile__button_active{{/if}}">{{text}}</button>
    `;
  }
}

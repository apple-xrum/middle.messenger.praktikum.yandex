import Block from "../../core/Block";

export default class ProfileButton extends Block {
  componentDidUpdate(oldProps: any, newProps: any): boolean {
    if (oldProps === newProps) {
      return false;
    }

    return true;
  }

  render() {
    return `
      <button class="profile__button {{#if active}}profile__button_active{{/if}}">{{text}}</button>
    `;
  }
}

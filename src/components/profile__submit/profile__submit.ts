import Block from "../../core/Block";

export default class ProfileSubmit extends Block {
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
        <button class="profile__submit {{#if active}}profile__submit_active{{/if}}">Сохранить</button>
      `;
  }
}

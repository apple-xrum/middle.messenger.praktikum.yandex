import Block from "../../core/Block";

export default class ProfileSubmit extends Block {
  componentDidUpdate(oldProps: any, newProps: any): boolean {
    if (oldProps === newProps) {
      return false;
    }

    return true;
  }

  render() {
    return `
        <button class="profile__submit {{#if active}}profile__submit_active{{/if}}">Сохранить</button>
      `;
  }
}

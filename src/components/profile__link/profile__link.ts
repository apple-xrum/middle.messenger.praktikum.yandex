import Block from "../../core/Block";

export default class ProfileLink extends Block {
  // eslint-disable-next-line class-methods-use-this
  componentDidUpdate(oldProps: object, newProps: object): boolean {
    if (oldProps === newProps) {
      return false;
    }

    return true;
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return '<a class="profile__link {{#if active}}profile__link_active{{/if}}" href="/signin/">Выйти</a>';
  }
}

import Block from "../../core/Block";

export default class ProfileLink extends Block<any> {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return '<a class="profile__link {{#if active}}profile__link_active{{/if}}" href="/signin/">Выйти</a>';
  }
}

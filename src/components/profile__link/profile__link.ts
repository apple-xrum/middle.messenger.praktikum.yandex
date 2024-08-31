import Block from "../../core/Block";

export default class ProfileLink extends Block{
  componentDidUpdate(oldProps: any, newProps: any): boolean {
    if(oldProps === newProps) {
        return false;
    }

    return true;
  }

  render() {
    return `<a class="profile__link {{#if active}}profile__link_active{{/if}}" href="/signin/">Выйти</a>`
  }
}
import Block from "../../core/Block";

type ProfileButtonProps = {
  active: boolean;
  text: string;
  events?: {
    click: (event: Event) => void,
  },
}

export default class ProfileButton extends Block<ProfileButtonProps> {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return `
      <button class="profile__button {{#if active}}profile__button_active{{/if}}">{{text}}</button>
    `;
  }
}

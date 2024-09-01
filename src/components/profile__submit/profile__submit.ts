import Block from "../../core/Block";

type ProfileSubmitProps = {
  active: boolean;
  events?: {
    click: (event: Event) => void,
  },
}

export default class ProfileSubmit extends Block<ProfileSubmitProps> {

  // eslint-disable-next-line class-methods-use-this
  render() {
    return `
        <button class="profile__submit {{#if active}}profile__submit_active{{/if}}">Сохранить</button>
      `;
  }
}

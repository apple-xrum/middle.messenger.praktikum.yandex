import Block from "../../core/Block";

type ProfileInputProps = {
  disabled: boolean;
  name: string;
  type: string;
  pattern: string;
  value: string;
  events?: {
    blur?: (event: Event) => boolean
  }
  error?: boolean;
}

export default class ProfileInput extends Block<ProfileInputProps> {

  // eslint-disable-next-line class-methods-use-this
  render() {
    return `
        <input
          class="profile__input {{#if error}}profile__input_error{{/if}}"
          type="{{type}}"
          name="{{name}}"
          id="{{name}}"
          value="{{value}}"
          pattern="{{pattern}}"
          {{#if disabled}}disabled{{/if}}
        />
      `;
  }
}

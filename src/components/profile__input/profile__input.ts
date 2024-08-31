import Block from "../../core/Block";

export default class ProfileInput extends Block {
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

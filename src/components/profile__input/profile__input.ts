import Block from "../../core/Block";

export default class ProfileInput extends Block{
  componentDidUpdate(oldProps: any, newProps: any): boolean {
    if(oldProps === newProps) {
        return false;
    }

    return true;
  }

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
      `
  }

}
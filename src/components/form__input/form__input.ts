import Block from "../../core/Block";

export default class FormInput extends Block {
  // eslint-disable-next-line class-methods-use-this
  componentDidUpdate(oldProps: object, newProps: object): boolean {
    if (oldProps === newProps) {
      return false;
    }

    return true;
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return '<input type={{type}} class="form__input {{#if error}}form__input_error{{/if}}" name="{{name}}" id="{{name}}" pattern="{{pattern}}" {{#if value}}value="{{value}}"{{/if}} />';
  }
}

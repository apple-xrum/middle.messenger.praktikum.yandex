import Block from '../../core/Block';

export default class FormInput extends Block {
  componentDidUpdate(oldProps: any, newProps: any): boolean {
    if (oldProps === newProps) {
      return false;
    }

    return true;
  }

  render() {
    return '<input type={{type}} class="form__input {{#if error}}form__input_error{{/if}}" name="{{name}}" id="{{name}}" pattern="{{pattern}}" {{#if value}}value="{{value}}"{{/if}} />';
  }
}

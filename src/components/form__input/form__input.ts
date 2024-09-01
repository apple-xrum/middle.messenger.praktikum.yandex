import Block from "../../core/Block";

type FormInputProps = {
  name: string;
  type: string;
  pattern: string;
  error?: boolean;
  events: {
    blur: (event: Event) => void;
  };
};

export default class FormInput extends Block<FormInputProps> {

  // eslint-disable-next-line class-methods-use-this
  render() {
    return '<input type={{type}} class="form__input {{#if error}}form__input_error{{/if}}" name="{{name}}" id="{{name}}" pattern="{{pattern}}" {{#if value}}value="{{value}}"{{/if}} />';
  }
}

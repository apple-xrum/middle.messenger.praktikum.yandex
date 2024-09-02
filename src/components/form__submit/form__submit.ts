import Block from "../../core/Block";

type FormSubmitProps = {
  submitText: string
}

export default class FormSubmit extends Block<FormSubmitProps> {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return `
          <button type="submit" class="form__submit">{{submitText}}</button>
        `;
  }
}

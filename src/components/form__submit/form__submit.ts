import Block from "../../core/Block";

export default class FormSubmit extends Block {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return `
          <button type="submit" class="form__submit">{{submitText}}</button>
        `;
  }
}

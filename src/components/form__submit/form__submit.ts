import Block from "../../core/Block";

export default class FormSubmit extends Block {
  render() {
      return (
        `
          <button type="submit" class="form__submit">{{submitText}}</button>
        `
      )
  }
}
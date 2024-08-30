import Block from "../../core/Block";

export default class FormField extends Block {
  render() {
      return (
        `
          <div class="form__field">
            <label class="form__label" for="{{name}}">{{label}}</label>
            <input type={{type}} class="form__input" name="{{name}}" id="{{name}}" />
            <span class="form__error" id="{{name}}-error"></span>
          </div>
        `
      )
  }
}
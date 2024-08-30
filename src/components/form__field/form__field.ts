import Block from "../../core/Block";
import { FormInput } from "../form__input";

export default class FormField extends Block {
  init(): void {
    const handleBlurReady = this.handleBlur.bind(this)

    const FormInputReady = new FormInput({
      name: this.props.name,
      type: this.props.type,
      pattern: this.props.pattern,
      events: {
        blur: handleBlurReady
    }
    })

    this.children = {
      ...this.children,
      FormInputReady
    }
  }

  handleBlur(e) {
    let target = e.target;
    let value = e.target.value;
    let pattern = new RegExp(target.getAttribute("pattern"));

    console.log(pattern, value)
    console.log(pattern.test(value))


    console.log(this)
  }

  render() {
      return (
        `
          <div class="form__field">
            <label class="form__label" for="{{name}}">{{label}}</label>
            {{{ FormInputReady }}}
            <span class="form__error" id="{{name}}-error"></span>
          </div>
        `
      )
  }
}
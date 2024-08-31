import Block from "../../core/Block";
import { FormInput } from "../form__input";

export default class FormField extends Block {
  init(): void {
    const handleBlurReady = this.handleBlur.bind(this);

    const FormInputReady = new FormInput({
      name: this.props.name,
      type: this.props.type,
      pattern: this.props.pattern,
      events: {
        blur: handleBlurReady,
      },
    });

    this.children = {
      ...this.children,
      FormInputReady,
    };
  }

  handleBlur(e) {
    const target = this.children.FormInputReady.element;
    const { value } = target;
    const pattern = new RegExp(target.getAttribute("pattern"));
    if (pattern.test(value)) {
      this.children.FormInputReady.setProps({ error: false, value });
      this.setProps({ errorText: "" });
      return true;
    }
    this.children.FormInputReady.setProps({ error: true, value });
    this.setProps({ errorText: "someProblem" });
    return false;
  }

  componentDidUpdate(oldProps: any, newProps: any): boolean {
    if (oldProps === newProps) {
      return false;
    }

    return true;
  }

  render() {
    return `
          <div class="form__field">
            <label class="form__label" for="{{name}}">{{label}}</label>
            {{{ FormInputReady }}}
            <span class="form__error" id="{{name}}-error">{{#if errorText}}{{errorText}}{{/if}}</span>
          </div>
        `;
  }
}

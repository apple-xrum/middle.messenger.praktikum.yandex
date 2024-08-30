import Block from "../../core/Block";
import { FormField } from "../form__field";
import { FormSubmit } from "../form__submit";

export default class Sign extends Block {
  constructor(props){
    super({
      ...props,
      events: {
        submit: (event) => {
          event.preventDefault();
          let res = {}
          let { elements } = event.target;
          elements = Array.from(elements).filter((element) => element.tagName === "INPUT")
          elements.forEach((element) => {
            const { name, value } = element;
            res[name] = value
          })
          console.log(res)
        }
      },
      FormSubmit: new FormSubmit({
        submitText: props.content.submitText,
      }),
    })
  }

  init() {
    this.FormFields = this.props.content.fields.map(field => ({[field.fieldname]: new FormField({...field})}))

    this.children = {
      ...this.children,
      ...(this.FormFields.reduce((e, acc) => ({...acc, ...e}), {}))
    }
  }



  render() {
      return (
        `
        <form class="sign__form form">
          <h1 class="form__title">{{content.title}}</h1>
          <p class="form__subtext">{{content.subtext}}</p>
          ${this.FormFields.map(field => `{{{ ${Object.keys(field)} }}}`).join("")}
          {{{ FormSubmit }}}
          {{#with content.redirection}}
            <div class="form__redirect">
              {{#if this.question}}
                <span class="form__question">{{this.question}}</span>
              {{/if}}
              <a class="form__link" href={{this.href}}>{{this.title}}</a>
            </div>
          {{/with}}
        </form>
        `
      )
  }
}
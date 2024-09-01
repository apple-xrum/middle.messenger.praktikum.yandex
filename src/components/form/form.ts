import Block from "../../core/Block";
import { FormField } from "../form__field";
import { FormSubmit } from "../form__submit";

export default class Sign extends Block<any> {
  // declare props: {
  //   content: {
  //     title: string;
  //     subtext: string;
  //     fields: {
  //       [key: string]: string;
  //     }[];
  //     submitText: string;
  //     redirection?: {
  //       question?: string;
  //       href: string;
  //       title: string;
  //     };
  //   };
  // };

  FormFields: { [key: string]: FormField }[];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super({
      ...props,
      FormSubmit: new FormSubmit({
        submitText: props.content.submitText,
      }),
    });
  }

  init() {
    this.FormFields = this.props.content.fields.map((field) => ({
      [field.fieldname]: new FormField({ ...field }),
    }));

    this.children = {
      ...this.children,
      ...this.FormFields.reduce((e, acc) => ({ ...acc, ...e }), {}),
    };
  }

  render() {
    return `
        <form class="sign__form form">
          <h1 class="form__title">{{content.title}}</h1>
          <p class="form__subtext">{{content.subtext}}</p>
          ${this.FormFields.map((field) => `{{{ ${Object.keys(field)} }}}`).join("")}
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
        `;
  }
}

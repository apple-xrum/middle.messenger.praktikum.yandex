import Block from "../../core/Block";
import { Button } from "../button";
import { FormField } from "../form__field";
import { FormSubmit } from "../form__submit";

type FormFieldProps = {
  name: string,
  label: string,
  type: string,
  fieldname: string,
  pattern: string,
  errorText?: string
}

type FormProps = {
  content: {
    title: string;
    subtext: string;
    fields: FormFieldProps[];
    submitText: string;
    redirection?: {
      question?: string;
      href: string;
      title: string;
    };
  };
  FormSubmit?: FormSubmit;
  events?: {
    submit: (event: Event) => void;
  }
}

export default class Form extends Block<FormProps> {

  FormFields: { [key: string]: FormField }[];

  constructor(props: FormProps) {
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

    if(this.props.content.redirection){
      const handleLinkClickReady = this.handleLinkClick.bind(this)
      const ButtonLinkToSignPage = new Button({
        text: this.props.content.redirection.title,
        class: 'form__link',
        onClick: handleLinkClickReady
      })
      this.children = {
        ...this.children,
        ButtonLinkToSignPage
      }
    }

    this.children = {
      ...this.children,
      ...this.FormFields.reduce((e, acc) => ({ ...acc, ...e }), {}),
    };
  }

  handleLinkClick(event: Event): void {
    event.preventDefault();

    window.router.go(this.props.content.redirection?.href)
  }

  render() {
    return `
        <form class="sign__form form">
          <h1 class="form__title">{{content.title}}</h1>
          <p class="form__subtext">{{content.subtext}}</p>
          ${this.FormFields.map((field) => `{{{ ${Object.keys(field)} }}}`).join("")}
          {{{ FormSubmit }}}
            <div class="form__redirect">
            {{#with content.redirection}}
              {{#if this.question}}
                <span class="form__question">{{this.question}}</span>
              {{/if}}
            {{/with}}
              {{{ ButtonLinkToSignPage }}}
            </div>
        </form>
        `;
  }
}

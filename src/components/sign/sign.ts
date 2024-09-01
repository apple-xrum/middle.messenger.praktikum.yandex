import Block from "../../core/Block";
import { Form } from "../form";

export default class Sign extends Block<any> {
  // declare children: {
  //   [key: string]: Block;
  //   FormReady: Form;
  // };

  // declare props:{
  //   [key: string]: string | object;
  // }

  init(): void {
    const handleSubmitReady = this.handleSubmit.bind(this);
    const FormReady = new Form({
      content: this.props.content,
      events: {
        submit: handleSubmitReady,
      },
    });

    this.children = {
      ...this.children,
      FormReady,
    };
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    const res: { [key: string]: string } = {};
    const inputList = this.children.FormReady.element ? Array.from((this.children.FormReady.element as Element).querySelectorAll("input")) : [];
    inputList.forEach((input) => {
      input.dispatchEvent(new Event("blur"));
    });
    const pass = inputList.every((input) => {
      const { name, value } = input;
      if (!value) return false;
      res[name] = value;
      return !input.classList.contains("form__input_error");
    });

    if (!pass) {
      // eslint-disable-next-line no-console
      console.log("Данные не прошли валидацию");
      return;
    }

    // eslint-disable-next-line no-console
    console.log(res);
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return `
          <div class="sign">
            <div class="sign__image">
              <p>Добро<br>пожаловать!</p>
            </div>
            {{{ FormReady }}}
          </div>
        `;
  }
}

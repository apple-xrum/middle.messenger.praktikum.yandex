import Block from "../../core/Block";
import { Form } from "../form";

export default class Sign extends Block {
  init(): void {
      const handleSubmitReady = this.handleSubmit.bind(this)
      const FormReady = new Form({
        content: this.props.content,
        events:{
          submit: handleSubmitReady
        }
      })

      this.children = {
        ...this.children,
        FormReady
      }
  }

  handleSubmit(event) {
    event.preventDefault();
    let res = {};
    const inputList = Array.from(this.children.FormReady.element.querySelectorAll("input"));
    inputList.forEach(input => {
      input.dispatchEvent(new Event("blur"))

    })
    const pass = inputList.every(input => {
      const { name, value } = input;
      if(!value) return false
      res[name] = value;
      return !input.classList.contains("form__input_error")
    })

    if(!pass){
      console.log("Данные не прошли валидацию")
      return
    }

    console.log(res)
  }

  render() {
      return (
        `
          <div class="sign">
            <div class="sign__image">
              <p>Добро<br>пожаловать!</p>
            </div>
            {{{ FormReady }}}
          </div>
        `
      )
  }
}
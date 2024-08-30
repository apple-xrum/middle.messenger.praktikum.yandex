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
    let res = {}
    let { elements } = event.target;
    elements = Array.from(elements).filter((element) => element.tagName === "INPUT")
    elements.forEach((element) => {
      const { name, value } = element;
      res[name] = value
    })
    let validatePattern = Object.values(this.children['FormReady'].children).filter(child => child.props.pattern).map(child => ({[child.props.name]: child.props.pattern})).reduce((child, acc) => acc = {...acc, ...child}, {});

    let pass = true;
    for(let [key, value] of Object.entries(validatePattern)){
      let regexp = new RegExp(value);
      if(!regexp.test(res[key])){
        pass = false;
      }
    }
    
    if(!pass){
      console.log("Данные не прошли валидацию")
    }
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
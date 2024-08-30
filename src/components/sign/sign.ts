import Block from "../../core/Block";
import { Form } from "../form";

export default class Sign extends Block {
  constructor(props){
    super({
      ...props,
      Form: new Form({
        content: props.content
      })
    })
  }

  render() {
      return (
        `
          <div class="sign">
            <div class="sign__image">
              <p>Добро<br>пожаловать!</p>
            </div>
            {{{ Form }}}
          </div>
        `
      )
  }
}
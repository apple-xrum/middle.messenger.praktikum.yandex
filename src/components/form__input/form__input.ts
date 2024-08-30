import Block from "../../core/Block";

export default class FormInput extends Block{
  constructor(props){
    super({
      ...props
    })
  }
  render() {
      return `<input type={{type}} class="form__input" name="{{name}}" id="{{name}}" pattern="{{pattern}}" />`
  }
}
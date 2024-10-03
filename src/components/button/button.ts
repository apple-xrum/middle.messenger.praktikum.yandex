import Block from "../../core/Block";

type ButtonProps = {
  class: string;
  text: string;
  events: {
    onclick: (event: Event) => void
  }
}

export default class Button extends Block<ButtonProps> {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return '<button type="button" class="{{ class }}">{{ text }}</button>';
  }
}
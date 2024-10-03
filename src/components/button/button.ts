import Block from "../../core/Block";

type ButtonProps = {
  class: string;
  text: string;
  events?: {
    click?: (event: Event) => void;
  }
  onClick: (event: Event) => void;
  active?: boolean;
}

export default class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super({
      ...props,
      events: {
        click: props.onClick,
      },
    });
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return '<button type="button" class="{{ class }} {{#if active}}{{ class }}_active{{/if}}">{{ text }}</button>';
  }
}
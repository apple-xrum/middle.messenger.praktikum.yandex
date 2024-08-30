import Block from "../../core/Block";

export default class ErrorPartial extends Block{
  render() {
      return `
        <div class="error">
          <p class="error__title">{{code}}</p>
          <p class="error__text">{{text}}</p>
          <a class="error__link" href="/">Назад к чатам</a>
        </div>
      `
  }
}
import Icon from "../../images/profile/avatar.svg"
import Block from "../../core/Block";

export default class ProfilePage extends Block{
  constructor(props){
    super({
      ...props,
      profile: {
        fields: [
          {
            name: "email",
            label: "E-mail",
            type: "email",
            value: "applexrum@yandex.ru",
          },
          {
            name: "login",
            label: "Логин",
            type: "text",
            value: "AppleXrum",
          },
          {
            name: "second_name",
            label: "Фамилия",
            type: "text",
            value: "Сластихин",
          },
          {
            name: "first_name",
            label: "Имя",
            type: "text",
            value: "Константин",
          },
          {
            name: "display_name",
            label: "Имя в чате",
            type: "text",
            value: "AppleXrum",
          },
          {
            name: "phone",
            label: "Телефон",
            type: "tel",
            value: "+7 (912) 824 31 81",
          },
        ],
      },
    });
  }

  render() {
      return `
        <main class="main page_profile">
          <div class="profile">
            <div class="profile__image-container">
              <img class="profile__image" src="${Icon}" alt="" />
            </div>
            <p class="profile__name">Константин</p>
            <form class="profile__form">
              {{#each profile.fields}}
              <div class="profile__field">
                <label class="profile__label" for="{{this.name}}"
                  >{{this.label}}</label
                >
                <input
                  class="profile__input"
                  type="{{this.type}}"
                  name="{{this.name}}"
                  id="{{this.name}}"
                  value="{{this.value}}"
                />
              </div>
              {{/each}}
              <button class="profile__button">Изменить данные</button>
              <button class="profile__button">Изменить пароль</button>
              <button class="profile__submit" style="display: none;">Сохранить</button>
            </form>
            <a class="profile__link" href="/signin/">Выйти</a>
          </div>
          <a class="button-back" href="/"></a>
        </main>
      `
  }
}
import { resolve } from "path";
import { defineConfig } from "vite";
import path from 'path';
import { fileURLToPath } from 'url';
import handlebars from "vite-plugin-handlebars";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: resolve(__dirname, "src/pages"),
  build: {
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/pages/index.html'),
        profile: resolve(__dirname, 'src/pages/profile/index.html'),
        signin: resolve(__dirname, 'src/pages/signin/index.html'),
        signup: resolve(__dirname, 'src/pages/signup/index.html'),
        "404": resolve(__dirname, 'src/pages/404.html'),
        "500": resolve(__dirname, 'src/pages/500.html'),
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "src/partials"),
      context: {
        signin: {
          title: "Вход",
          subtext: "Пожалуйста, войдите в свой аккаунт",
          fields: [
            {
              name: "login",
              label: "Логин",
              type: "text"
            },
            {
              name: "password",
              label: "Пароль",
              type: "password"
            },
          ],
          submit: "Войти",
          redirection: {
            question: "Нет аккаунта?",
            href: "/signup/",
            title: "Регистрация",
          },
        },
        signup: {
          title: "Регистрация",
          subtext: "Пожалуйста, создайте свой аккаунт",
          fields: [
            {
              name: "email",
              label: "E-mail",
              type: "email"
            },
            {
              name: "login",
              label: "Логин",
              type: "text"
            },
            {
              name: "second_name",
              label: "Фамилия",
              type: "text"
            },
            {
              name: "first_name",
              label: "Имя",
              type: "text"
            },
            {
              name: "phone",
              label: "Телефон",
              type: "tel"
            },
            {
              name: "password",
              label: "Пароль",
              type: "password"
            },
            {
              name: "confirm-password",
              label: "Подтвердите пароль",
              type: "password"
            },
          ],
          submit: "Регистрация",
          redirection: {
            href: "/signin/",
            title: "Войти",
          },
        },
        profile: {
          fields: [
            {
              name: "email",
              label: "E-mail",
              type: "email",
              value: "applexrum@yandex.ru"
            },
            {
              name: "login",
              label: "Логин",
              type: "text",
              value: "AppleXrum"
            },
            {
              name: "second_name",
              label: "Фамилия",
              type: "text",
              value: "Сластихин"
            },
            {
              name: "first_name",
              label: "Имя",
              type: "text",
              value: "Константин"
            },
            // {
            //   name: "chat_name",
            //   label: "Имя в чате",
            //   type: "text",
            //   value: "AppleXrum"
            // },
            {
              name: "phone",
              label: "Телефон",
              type: "tel",
              value: "+7 (912) 824 31 81"
            },
          ],
        },
        main: {
          chats: new Array(50).fill(
            {
              message: "Привет",
              name: "Саня",
              image: "https://avatars.mds.yandex.net/i?id=324d973f87a478a5eb5a917d57e80b97af17d338-12742198-images-thumbs&n=13",
              date: "13:04",
              unreadMessage: 2,
            },
          ),
          messages: [
            {
              text: "",
              date: ""
            }
          ]
        },
        serverError:{
          code: 500,
          text: "Ошибка сервера",
        },
        pageNotFound:{
          code: 404,
          text: "Страница не найдена",
        },
      },
    })
  ],
});

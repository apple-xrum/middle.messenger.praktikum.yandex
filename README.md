
# Middle Messenger

Этот проект представляет собой мессенджер, разработанный в рамках курса по веб-разработке. Проект включает в себя основные функции мессенджера, такие как авторизация, регистрация, список чатов и лента переписки, а также настройки пользователя.

## Установка и запуск

### Установка зависимостей

Перед запуском проекта убедитесь, что у вас установлен Node.js и npm. Затем выполните следующие команды:

``` bash
npm install
```

### Запуск проекта

Для запуска проекта в режиме разработки используйте команду:

``` bash
npm run dev
```

Проект будет доступен по адресу `http://localhost:5173`.

### Сборка проекта

Для сборки проекта используйте команду:

``` bash
npm run build
```

### Запуск собранного проекта

Для запуска собранного проекта используйте команду:

``` bash
npm run start
```

Cобранный проект будет доступен по адресу `http://localhost:3000`.

## Структура проекта

- `src/` - исходный код проекта
  - `components/` - стили компонентов
  - `pages/` - страницы
     - `**/*.hbs` - прочие страницы
     - `index.html` - точка входа
     - `404.html` - страницы ошибки 404
     - `500.html` - страницы ошибок 5**
  - `partials/` - шаблоны Handlebars
- `public/` и `static/` - статические файлы
- `.gitignore` - файлы и папки, которые не должны быть добавлены в репозиторий
- `package.json` - файл конфигурации npm
- `vite.config.js` - конфигурация Vite

## Свёрстанные страницы

- [Авторизация](https://practicum-middle-messenger.netlify.app/signin/)
- [Регистрация](https://practicum-middle-messenger.netlify.app/signup/)
- [Список чатов и лента переписки](https://practicum-middle-messenger.netlify.app/)
- [Настройки пользователя](https://practicum-middle-messenger.netlify.app/profile/)
- [Страница 404](https://practicum-middle-messenger.netlify.app/404)
- [Страница 500](https://practicum-middle-messenger.netlify.app/500)

## Прототипы экранов

Прототипы экранов находятся в Figma. Ссылка на прототипы: [Figma Prototypes](https://www.figma.com/design/b80KB4QgRVcri89rTnO88R/Мессенджер?node-id=0-1&t=yc4T5f9dUkhWfg86-0)

Автор прототипов: [Мария Новикова](https://vk.com/maaryno)

## Netlify

Проект настроен для автодеплоя на Netlify. Домен проекта: [practicum-middle-messenger.netlify.app](https://practicum-middle-messenger.netlify.app/)


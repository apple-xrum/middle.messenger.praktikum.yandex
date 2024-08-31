import { Chat, Sidebar } from '../../components';
import Block from '../../core/Block';

export default class HomePage extends Block {
  constructor(props) {
    super({
      ...props,
      Sidebar: new Sidebar({
        chats: new Array(50).fill({
          message: 'Привет',
          name: 'Саня',
          image:
            'https://avatars.mds.yandex.net/i?id=324d973f87a478a5eb5a917d57e80b97af17d338-12742198-images-thumbs&n=13',
          date: '13:04',
          unreadMessage: 2,
        }),
      }),
      Chat: new Chat({
        active: true,
        image:
            'https://avatars.mds.yandex.net/i?id=324d973f87a478a5eb5a917d57e80b97af17d338-12742198-images-thumbs&n=13',
        name: 'Саня',
      }),
    });
  }

  render() {
    return `
        <main class="main">
          {{{ Sidebar }}}
          {{{ Chat }}}
        </main>
      `;
  }
}

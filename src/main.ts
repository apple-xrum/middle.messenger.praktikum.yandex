import Handlebars from 'handlebars';
import * as Components from './components'
import * as Pages from './pages'

declare global {
  export type Keys<T extends Record<string, unknown>> = keyof T;
  export type Values<T extends Record<string, unknown>> = T[Keys<T>];
}

const pages = {
  'signin': [ Pages.SignInPage ],
  'signup': [ Pages.SignUpPage],
  'home': [ Pages.Home ],
  'profile': [ Pages.Profile ]
}

Object.entries(Components).forEach(([ name, component ]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
  //@ts-ignore
  const [ source, context ] = pages[page];
  const container = document.getElementById('app')!;

  if(source instanceof Object) {
    const page = new source(context);
    container.innerHTML = '';
    container.append(page.getContent());
    // page.dispatchComponentDidMount();
    return;
  }

  container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener('DOMContentLoaded', () => {
  switch(window.location.pathname){
    case "/": {
      navigate("home");
      break;
    }
    case "/signin/": {
      navigate("signin");
      break;
    }
    case "/signup/": {
      navigate("signup");
      break;
    }
    case "/profile/": {
      navigate("profile");
      break;
    }
  }
});

document.addEventListener('click', e => {
  //@ts-ignore
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
import Handlebars from "handlebars";
import * as Components from "./components";
import * as Pages from "./pages";

declare global {
  export type Keys<T extends Record<string, unknown>> = keyof T;
  export type Values<T extends Record<string, unknown>> = T[Keys<T>];
}

const pages = {
  signin: [Pages.SignInPage],
  signup: [Pages.SignUpPage],
  home: [Pages.HomePage],
  profile: [Pages.ProfilePage],
  pageNotFound: [Pages.PageNotFound],
  pageServerError: [Pages.PageServerError],
};

const components = {
  Sign: [Components.Sign],
  Form: [Components.Form],
  FormField: [Components.FormField],
  FormInput: [Components.FormInput],
  FormSubmit: [Components.FormSubmit],
  Sidebar: [Components.Sidebar],
  ChatList: [Components.ChatList],
  ChatItem: [Components.ChatItem],
  Chat: [Components.Chat],
  ChatFooter: [Components.ChatFooter],
  ProfileField: [Components.ProfileField],
  ProfileInput: [Components.ProfileInput],
  ProfileButton: [Components.ProfileButton],
  ProfileSubmit: [Components.ProfileSubmit],
  ProfileLink: [Components.ProfileLink],
  ErrorPartial: [Components.ErrorPartial],
}

Object.entries(components).forEach(([name, component]) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [source, context] = pages[page];
  const container = document.getElementById("app")!;

  if (source instanceof Object) {
    // eslint-disable-next-line @typescript-eslint/no-shadow, new-cap
    const page = new source(context);
    container.innerHTML = "";
    container.append(page.getContent());
    // page.dispatchComponentDidMount();
    return;
  }

  container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener("DOMContentLoaded", () => {
  switch (window.location.pathname) {
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
    case "/500/": {
      navigate("pageServerError");
      break;
    }
    default: {
      navigate("pageNotFound");
      break;
    }
  }
});

document.addEventListener("click", (event: Event) => {
  if(event.target && (event.target as HTMLAnchorElement).tagName === "A"){
    event.preventDefault();
    const link = event.target as HTMLAnchorElement;
    const href = link.getAttribute("href");
    switch (href) {
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
      case "/500/": {
        navigate("pageServerError");
        break;
      }
      default: {
        navigate("pageNotFound");
        break;
      }
    }
  }
})

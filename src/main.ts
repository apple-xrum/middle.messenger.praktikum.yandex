import Handlebars from "handlebars";
import * as Components from "./components";
import * as Pages from "./pages";
import Router from "./core/Router";

declare global {
  export type Keys<T extends Record<string, unknown>> = keyof T;
  export type Values<T extends Record<string, unknown>> = T[Keys<T>];
}

Object.entries(Components).forEach(([name, component]) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  Handlebars.registerPartial(name, component);
});

const router = new Router("#app");

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.router = router;

router
  .use('/', Pages.SignInPage)
  .use('/sign-up', Pages.SignUpPage)
  .use('/settings', Pages.ProfilePage)
  .use('/messenger', Pages.HomePage)
  .use('*', Pages.PageNotFound)
  .start();

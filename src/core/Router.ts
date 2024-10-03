/* eslint-disable no-underscore-dangle */
import Route from "./Route";

class Router {
  private _currentRoute: void;

  constructor(rootQuery) {
    if (Router.__instance) {
      // eslint-disable-next-line no-constructor-return
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname, block) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = ((event) => {
      this._onRoute(event.currentTarget.location.pathname);
    });
    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname) {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    // add code
    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    if (route !== null) {
      route.render(route, pathname);
    }
  }

  go(pathname) {
    this.history.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname) {
    const route = this.routes.find((routesItem) => routesItem.match(pathname));
    if (!route) {
      return this.routes.find((routesItem) => routesItem.match("*"));
    }
    return route;
  }
}

export default Router;

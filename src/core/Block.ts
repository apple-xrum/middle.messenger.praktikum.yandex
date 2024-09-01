/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import { nanoid } from "nanoid";
import Handlebars from "handlebars";
import EventBus from "./EventBus";

type TEvents = Values<typeof Block.EVENTS>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
export default abstract class Block<Props extends Record<string, any> & Record<string, Block<any>> = {}> {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  } as const;

  _element: HTMLElement | null = null;

  _meta = null;

  _id = nanoid(6);


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: Record<string, Block<any>>;

  props: Props;

  name: string;

  eventBus: () => EventBus<TEvents>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(propsWithChildren: Props & Record<string, Block<any>> = {} as Props & Record<string, Block<any>>) {
    const eventBus = new EventBus<TEvents>();
    const { props, children } = this._getChildrenAndProps(propsWithChildren);
    this.props = this._makePropsProxy({ ...props } as Props);
    this.children = children;
    this.name = "";

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);

    eventBus.emit(Block.EVENTS.INIT);
  }

  private _addEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      if(this._element){
        (this._element as HTMLElement).addEventListener(eventName, events[eventName]);
      }
    });
  }

  private _removeEvents(){
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      if(this._element){
        (this._element as HTMLElement).removeEventListener(eventName, events[eventName]);
      }
    });
  }

  private _registerEvents(eventBus: EventBus<TEvents>) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _init() {
    this.init();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  init() {}

  private _componentDidMount() {
    this.componentDidMount();

    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: Props, newProps: Props) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps: Props, newProps: Props) {
    if(oldProps === newProps){
      return false;
    }
    return true;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _getChildrenAndProps(propsAndChildren: Props & { [key: string]: Block<any> }) {
    const children: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key: string | symbol]: Block<any>
    } = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const props: Record<string, any> = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setProps = (nextProps: Props) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const propsAndStubs: Record<string, any> = { ...this.props };

    this._removeEvents();

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    const fragment = this._createDocumentElement("template");

    fragment.innerHTML = Handlebars.compile(this.render())(propsAndStubs);

    const newElement = (fragment as HTMLTemplateElement).content.firstElementChild as HTMLElement;

    Object.values(this.children).forEach((child) => {
      const stub = (fragment as HTMLTemplateElement).content.querySelector(`[data-id="${child._id}"]`);

      stub?.replaceWith(child.getContent()!);
    });

    if (this._element) {
      this._element.replaceWith(newElement);
    }

    this._element = newElement;

    this._addEvents();
  }

  render() {}

  getContent() {
    // Хак, чтобы вызвать CDM только после добавления в DOM
    if (this.element?.parentNode?.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      setTimeout(() => {
        if (
          this.element?.parentNode?.nodeType !== Node.DOCUMENT_FRAGMENT_NODE
        ) {
          this.dispatchComponentDidMount();
        }
      }, 100);
    }

    return this._element;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _makePropsProxy(props: Props & Record<string | symbol, any> & any) {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop, value) {
        const oldTarget = { ...target };

        // eslint-disable-next-line no-param-reassign, @typescript-eslint/no-explicit-any
        target[prop] = value;


        // Запускаем обновление компоненты
        // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget as never, target as never);
        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      },
    });
  }

  private _createDocumentElement(tagName: string) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }

  // show() {
  //   this.getContent().style.display = "block";
  // }

  // hide() {
  //   this.getContent().style.display = "none";
  // }
}

import Block from "../../core/Block";
import { ProfileInput } from "../profile__input";

export default class ProfileField extends Block<any> {
  // declare children: {
  //   [key: string]: Block,
  //   ProfileInputReady: ProfileInput
  // };

  componentDidUpdate(oldProps: object, newProps: object): boolean {
    if (oldProps === newProps) {
      return false;
    }

    const { disabled, name, type, pattern, value } = this.props;

    this.children.ProfileInputReady.setProps({
      disabled, name, type, pattern, value
    });

    return true;
  }

  init(): void {
    const handleBlurReady = this.handleBlur.bind(this);

    const { disabled, name, type, pattern, value }: {
      disabled?: string,
      name?: string,
      type?: string,
      pattern?: string,
      value?: string
    } = this.props;

    const ProfileInputReady = new ProfileInput({
      disabled,
      name,
      type,
      pattern,
      value,
      events: {
        blur: handleBlurReady,
      },
    });

    this.children = {
      ...this.children,
      ProfileInputReady,
    };
  }

  handleBlur(event: Event): boolean {
    event.preventDefault()
    if(!this.children.ProfileInputReady.element) return false
    const target = this.children.ProfileInputReady.element as HTMLInputElement;
    const { value } = target;
    const pattern = new RegExp(target.getAttribute("pattern") || "");
    if (pattern.test(value)) {
      this.children.ProfileInputReady.setProps({ error: false, value });
      return true;
    }
    this.children.ProfileInputReady.setProps({ error: true, value });
    return false;
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return `
      <div class="profile__field">
        <label class="profile__label" for="{{this.name}}"
          >{{this.label}}</label
        >
        {{{ ProfileInputReady }}}
      </div>
    `;
  }
}

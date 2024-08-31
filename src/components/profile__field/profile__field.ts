import Block from "../../core/Block";
import { ProfileInput } from "../profile__input";

export default class ProfileField extends Block{
  componentDidUpdate(oldProps: any, newProps: any): boolean {
    if(oldProps === newProps) {
        return false;
    }

    this.children.ProfileInputReady.setProps({
      disabled: this.props.disabled,
      name: this.props.name,
      type: this.props.type,
      pattern: this.props.pattern,
      value: this.props.value,
    })

    return true;
  }

  init(): void {
    const handleBlurReady = this.handleBlur.bind(this)

    const ProfileInputReady = new ProfileInput({
      disabled: this.props.disabled,
      name: this.props.name,
      type: this.props.type,
      pattern: this.props.pattern,
      value: this.props.value,
      events: {
        blur: handleBlurReady
      }
    })

    this.children = {
      ...this.children,
      ProfileInputReady
    }
  }

  handleBlur(e) {
    const target = this.children.ProfileInputReady.element;
    const value = target.value;
    const pattern = new RegExp(target.getAttribute("pattern"));
    if(pattern.test(value)){
      this.children.ProfileInputReady.setProps({error: false, value: value})
      return true
    }
    this.children.ProfileInputReady.setProps({error: true, value: value})
    return false
  }

  render() {
    return `
      <div class="profile__field">
        <label class="profile__label" for="{{this.name}}"
          >{{this.label}}</label
        >
        {{{ ProfileInputReady }}}
      </div>
    `
  }
}
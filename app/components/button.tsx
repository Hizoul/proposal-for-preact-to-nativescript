import { h, Component } from "../preact"


class Button extends Component {
  render() {
    return h('button', this.props, this.props.children)
  }
}

export default Button
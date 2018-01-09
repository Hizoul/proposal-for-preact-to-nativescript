import { h, Component } from "../preact"


class Label extends Component {
  render() {
    return h('label', this.props, this.props.children)
  }
}

export default Label
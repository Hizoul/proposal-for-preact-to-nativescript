import { h, Component } from "../preact"


class TextField extends Component {
  render() {
    return h('textfield', this.props, this.props.children)
  }
}

export default TextField
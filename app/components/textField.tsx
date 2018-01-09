import { h, Component } from "../preact"


class TextField extends Component {
  render() {
    return h('textField', this.props, this.props.children)
  }
}

export default TextField
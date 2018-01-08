import { h, Component } from "../preact"


class StackLayout extends Component {
  render() {
    return h('stacklayout', this.props, this.props.children)
  }
}

export default StackLayout
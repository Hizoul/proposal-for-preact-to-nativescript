import { h, Component } from "../preact"


class StackLayout extends Component {
  render() {
    return h('stackLayout', this.props, this.props.children)
  }
}

export default StackLayout
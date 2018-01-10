import { h, Component } from "../preact"


class AbsoluteLayout extends Component {
  render() {
    return h('absoluteLayout', this.props, this.props.children)
  }
}

export default AbsoluteLayout
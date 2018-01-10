import { h, Component } from "../preact"


class FlexboxLayout extends Component {
  render() {
    return h('flexboxLayout', this.props, this.props.children)
  }
}

export default FlexboxLayout
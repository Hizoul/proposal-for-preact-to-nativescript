import { h, Component } from "preact"


class StackLayout extends Component<any, any> {
  render() {
    return h('stacklayout', this.props, this.props.children)
  }
}

export default StackLayout
import { h, Component } from "../preact"


class TextView extends Component {
  render() {
    return h('textView', this.props, this.props.children)
  }
}

export default TextView
import { h, Component } from "../preact"


class TextView extends Component {
  render() {
    return h('textview', this.props, this.props.children)
  }
}

export default TextView
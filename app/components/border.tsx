import { h, Component } from "../preact"


class Border extends Component {
  render() {
    return h('border', this.props, this.props.children)
  }
}

export default Border
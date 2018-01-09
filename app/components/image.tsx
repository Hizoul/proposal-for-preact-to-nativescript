import { h, Component } from "../preact"


class Image extends Component {
  render() {
    return h('image', this.props, this.props.children)
  }
}

export default Image
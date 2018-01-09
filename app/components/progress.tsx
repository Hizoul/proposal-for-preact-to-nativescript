import { h, Component } from "../preact"


class Progress extends Component {
  render() {
    return h('progress', this.props, this.props.children)
  }
}

export default Progress
import { h, Component } from "../preact"


class ListView extends Component {
  render() {
    return h('listView', this.props, this.props.children)
  }
}

export default ListView
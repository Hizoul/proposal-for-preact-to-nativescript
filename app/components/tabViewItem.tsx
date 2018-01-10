import { h, Component } from "../preact"


class TabViewItem extends Component {
  render() {
    return h('TabViewItem', this.props, this.props.children)
  }
}

export default TabViewItem
import { h, Component } from "../preact"


class TabViewItem extends Component {
  render() {
    return h('tabViewItem', this.props, this.props.children)
  }
}

export default TabViewItem
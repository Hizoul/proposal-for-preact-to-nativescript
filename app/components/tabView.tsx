import { h, Component } from "../preact"


class TabView extends Component {
  render() {
    return h('tabView', this.props, this.props.children)
  }
}

export default TabView
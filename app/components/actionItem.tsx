import { h, Component } from "../preact"

class ActionBar extends Component {
  render() {
    return h('actionItem', this.props, this.props.children)
  }
}


export default ActionBar
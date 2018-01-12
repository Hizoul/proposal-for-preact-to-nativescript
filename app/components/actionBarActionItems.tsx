import { h, Component } from "../preact"

class ActionBarActionItems extends Component {
  render() {
    return h('actionItem', this.props, this.props.children)
  }
}


export default ActionBarActionItems
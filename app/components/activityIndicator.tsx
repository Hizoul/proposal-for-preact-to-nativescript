import { h, Component } from "../preact"

class ActivityIndicator extends Component {
  render() {
    return h('activityIndicator', this.props, this.props.children)
  }
}


export default ActivityIndicator
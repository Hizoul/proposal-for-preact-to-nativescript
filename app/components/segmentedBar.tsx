import { h, Component } from "../preact"

class SegmentedBar extends Component {
  render() {
    return h('segmentedBar', this.props, this.props.children)
  }
}


export default SegmentedBar
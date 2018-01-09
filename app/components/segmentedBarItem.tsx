import { h, Component } from "../preact"

class SegmentedBar extends Component {
  render() {
    return h('segmentedBarItem', this.props, this.props.children)
  }
}


export default SegmentedBar
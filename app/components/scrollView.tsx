import { h, Component } from "../preact"

class ScrollView extends Component {
  render() {
    return h('scrollView', this.props, this.props.children)
  }
}


export default ScrollView
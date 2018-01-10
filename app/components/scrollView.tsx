import { h, Component } from "../preact"

class ScrollView extends Component {
  render() {
    return h('page', this.props, this.props.children)
  }
}


export default ScrollView
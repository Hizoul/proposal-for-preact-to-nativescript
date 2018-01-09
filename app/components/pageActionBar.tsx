import { h, Component } from "../preact"

class Page extends Component {
  render() {
    return h('pageActionBar', this.props, this.props.children)
  }
}


export default Page
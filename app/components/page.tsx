import { h, Component } from "../preact"

class Page extends Component {
  render() {
    return h('page', this.props, this.props.children)
  }
}


export default Page
import { h, Component } from "../preact"


class HtmlView extends Component {
  render() {
    return h('htmlView', this.props, this.props.children)
  }
}

export default HtmlView
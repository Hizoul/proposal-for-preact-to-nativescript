import { h, Component } from "../preact"


class WebView extends Component {
  render() {
    return h('webView', this.props, this.props.children)
  }
}

export default WebView
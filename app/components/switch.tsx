import { h, Component } from "../preact"

class Switch extends Component {
  render() {
    return h('switch', this.props, this.props.children)
  }
}


export default Switch
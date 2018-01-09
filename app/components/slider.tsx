import { h, Component } from "../preact"

class Slider extends Component {
  render() {
    return h('slider', this.props, this.props.children)
  }
}


export default Slider
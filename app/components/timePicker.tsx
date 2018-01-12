import { h, Component } from "../preact"

class TimePicker extends Component {
  render() {
    return h('timePicker', this.props, this.props.children)
  }
}


export default TimePicker
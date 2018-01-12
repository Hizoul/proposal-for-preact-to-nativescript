import { h, Component } from "../preact"

class DatePicker extends Component {
  render() {
    return h('datePicker', this.props, this.props.children)
  }
}


export default DatePicker
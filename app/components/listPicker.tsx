import { h, Component } from "../preact"

class ListPicker extends Component {
  render() {
    return h('listPicker', this.props, this.props.children)
  }
}


export default ListPicker
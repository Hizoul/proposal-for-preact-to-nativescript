import { h, Component } from "../preact"


class GridLayout extends Component {
  render() {
    return h('gridLayout', this.props, this.props.children)
  }
}

export default GridLayout
import { h, Component } from "../preact"

class NavigationButton extends Component {
  render() {
    return h('navigationButton', this.props, this.props.children)
  }
}


export default NavigationButton
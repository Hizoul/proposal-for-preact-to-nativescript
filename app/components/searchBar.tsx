import { h, Component } from "../preact"

class SearchBar extends Component {
  render() {
    return h('searchBar', this.props, this.props.children)
  }
}


export default SearchBar
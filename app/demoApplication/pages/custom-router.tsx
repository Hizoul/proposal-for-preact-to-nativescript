import { h, Component } from "../../preact"
import Page from "../../components/page"
import PageActionBar from "./actionBar"
import PageBorder from "./border"
import PageSearchBar from "./searchBar"
import PageSwitch from "./switch"
import PageProgress from "./progressP"
import PageSlider from "./slider"
import PageImage from "./image"
import PageHtml from "./htmlView"
import PageSegmentedBar from "./segmentedBar"
import PageTabView from "./tabView"
import PageListView from "./listView"
import PageActivityIndicator from "./activityIndicatorC"
import FlexboxLayout from '../../components/flexboxLayout'
import TextView from "../../components/textView"
import TextField from "../../components/textField"
import navigateTo from '../../util/navigateTo'
import Button from '../../components/button'
import Label from '../../components/label'
import ScrollView from '../../components/scrollView'
import StackLayout from "../../components/stackLayout"
import AbsoluteLayout from '../../components/absoluteLayout'
import {Router, Route} from "preact-router"
import holder from '../components/router';

const routes = [
  {default: true, path: "/", component: PageActivityIndicator},
  {path: "/test", component: PageProgress}
]

class PageCustomRouter extends Component {
  setNav: Function
  goBack: Function
  constructor(props) {
    super(props)
    this.state = {
      route: "/",
      navStack: []
    }
    this.setNav = (newRoute) => {
      const newStack = this.state.navStack.splice()
      newStack.push(newRoute)
      this.setState({route: newRoute, navStack: newStack})
    }
    this.goBack = () => {
      const newStack = this.state.navStack.splice()
      newStack.pop()
      this.setState({route: newStack[newStack.length - 1], navStack: newStack})
    }
  }
  render() {
    let Comp = StackLayout
    for (const route of routes) {
      if (this.state.route === route.path) {
        Comp = route.component
      }
    }
    return (
      <Page>
        <Comp navigateTo={this.setNav} goBack={this.goBack} />
      </Page>
    )
  }
}

export default PageCustomRouter
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
import PageActivityIndicator from "./activityIndicatorP"
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

class PagePreactRouter extends Component {
  render() {
    return (
      <Page>
        <Router key="rou" ref={(ref) => {
          console.log("calling routerref")
          holder.router = ref}}>
          <Route key="prog" component={PageProgress} path="/test" />
          <Route key="act" component={PageActivityIndicator} path="/" default />
        </Router>
      </Page>
    )
  }
}

export default PagePreactRouter
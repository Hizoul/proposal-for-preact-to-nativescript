import { h, Component } from "../../preact"
import Page from "../../components/page"
import PageActionBar from "./actionBar"
import PageBorder from "./border"
import PageSearchBar from "./searchBar"
import PageSwitch from "./switch"
import PageProgress from "./progress"
import PageSlider from "./slider"
import PageImage from "./image"
import PageHtml from "./htmlView"
import PageSegmentedBar from "./segmentedBar"
import PageTabView from "./tabView"
import PageListView from "./listView"
import PagePreactRouter from "./preact-router"
import PagePickers from "./pickers"
import PageDialogs from "./dialogs"
import PageCustomRouter from "./custom-router"
import PageActivityIndicator from "./activityIndicator"
import FlexboxLayout from '../../components/flexboxLayout'
import TextView from "../../components/textView"
import TextField from "../../components/textField"
import navigateTo from '../../util/navigateTo'
import Button from '../../components/button'
import Label from '../../components/label'
import ActionBar from '../../components/actionBar'
import ScrollView from '../../components/scrollView'
import StackLayout from "../../components/stackLayout"
import AbsoluteLayout from '../../components/absoluteLayout'
import ActionItem from "../../components/actionItem";

class Comp extends Component {
  render() {
    return (
      <Page cssFile="demoApplication/pages/start.css">
          <ActionBar text="Preact to Nativescript Menu" />
          <ScrollView>
            <StackLayout>
              <Label className="mainHeading" text="Working" />
              <Button text="ActivityIndicator" onTap={navigateTo.bind(null, <PageActivityIndicator />)} />
              <Button text="SearchBar" onTap={navigateTo.bind(null, <PageSearchBar />)} />
              <Button text="Preact-Router" onTap={navigateTo.bind(null, <PagePreactRouter />)} />
              <Button text="Custom-Router" onTap={navigateTo.bind(null, <PageCustomRouter />)} />
              <Button text="Dialogs" onTap={navigateTo.bind(null, <PageDialogs />)} />
              <Button text="Progress" onTap={navigateTo.bind(null, <PageProgress />)} />
              <Button text="Slider" onTap={navigateTo.bind(null, <PageSlider />)} />
              <Button text="Image" onTap={navigateTo.bind(null, <PageImage />)} />
              <Button text="Date- / Time- / List-Picker" onTap={navigateTo.bind(null, <PagePickers />)} />
              <Button text="HtmlView & WebView" onTap={navigateTo.bind(null, <PageHtml />)} />
              <Button text="SegmentedBar" onTap={navigateTo.bind(null, <PageSegmentedBar />)} />
              <Button text="TabView" onTap={navigateTo.bind(null, <PageTabView />)} />
              <Button text="ListView" onTap={navigateTo.bind(null, <PageListView />)} />
              <Button text="Switch" onTap={navigateTo.bind(null, <PageSwitch />)} />
              <Button text="ActionBar" onTap={navigateTo.bind(null, <PageActionBar />)} />
            </StackLayout>
          </ScrollView>
      </Page>
    )
  }
}

export default Comp
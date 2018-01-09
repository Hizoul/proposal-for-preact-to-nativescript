import { h, Component } from "../../preact"
import Page from "../../components/page"
import PageActionBar from "./actionBar"
import PageBorder from "./border"
import PageSearchBar from "./searchBar"
import PageSwitch from "./switch"
import PageProgress from "./progress"
import PageSlider from "./slider"
import PageImage from "./image"
import PageActivityIndicator from "./activityIndicator"
import StackLayout from '../../components/stackLayout'
import TextView from "../../components/textView"
import TextField from "../../components/textField"
import navigateTo from '../../util/navigateTo'
import Button from '../../components/button'
import Label from '../../components/label'

class Comp extends Component {
  render() {
    return (
      <Page cssFile="demoApplication/pages/start.css">
        <StackLayout>
          <Label className="mainHeading" text="Working" />
          <Button text="ActivityIndicator" onTap={navigateTo.bind(null, <PageActivityIndicator />)} />
          <Button text="SearchBar" onTap={navigateTo.bind(null, <PageSearchBar />)} />
          <Button text="Switch" onTap={navigateTo.bind(null, <PageSwitch />)} />
          <Button text="Progress" onTap={navigateTo.bind(null, <PageProgress />)} />
          <Button text="Slider" onTap={navigateTo.bind(null, <PageSlider />)} />
          <Button text="Image" onTap={navigateTo.bind(null, <PageImage />)} />
          <Label className="mainHeading" text="Not Working / TBD" />
          <Button text="Border" onTap={navigateTo.bind(null, <PageBorder />)} />
          <Button text="ActionBar" onTap={navigateTo.bind(null, <PageActionBar />)} />
        </StackLayout>
      </Page>
    )
  }
}

export default Comp
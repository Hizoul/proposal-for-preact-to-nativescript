import { h, Component } from "../../preact"
import Page from "../../components/page"
import PageActionBar from "./actionBar"
import PageBorder from "./border"
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
          <Label className="mainHeading" text="Not Working / TBD" />
          <Button text="Border" onTap={navigateTo.bind(null, <PageBorder />)} />
          <Button text="ActionBar" onTap={navigateTo.bind(null, <PageActionBar />)} />
        </StackLayout>
      </Page>
    )
  }
}

export default Comp
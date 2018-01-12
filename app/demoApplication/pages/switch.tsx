import { h, Component } from "../../preact"
import Page from "../../components/page"
import Button from "../../components/button"
import StackLayout from '../../components/stackLayout'
import Label from "../../components/label"
import SearchBar from "../../components/searchBar"
import Switch from "../../components/switch"
import { setValueTrigger, setValueViaEvent } from "../components/valueHelpers"
import { goBack } from "../../util/navigateTo"
import ActionBar from "../../components/actionBar"

class PageSwitch extends Component {
  setS1: Function
  setS2: Function
  constructor(props) {
    super(props)
    this.setS1 = setValueViaEvent(this, "s1")
    this.setS2 = setValueViaEvent(this, "s2")
  }
  getVal = (key) => {
    const val = this.state[key]
    if (val === undefined || val === null) {
      return "false"
    }
    return String(val)
  }
  render() {
    return (
      <Page>
        <ActionBar text="Switch" />
        <StackLayout>
          <Label
            text={`Switch #1 value is ${this.getVal("s1")}`}
          />
          <Switch
            checked={this.getVal("s1")}
            onCheckedChange={this.setS1}
          />
          <Label
            text={`Switch #2 value is ${this.getVal("s2")}`}
          />
          <Switch
            checked={this.getVal("s2")}
            onCheckedChange={this.setS2}
          />
          <Button text="Back" onTap={goBack} />
        </StackLayout>
      </Page>
    )
  }
}

export default PageSwitch
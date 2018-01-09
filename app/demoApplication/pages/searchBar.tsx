import { h, Component } from "../../preact"
import Page from "../../components/page"
import Button from "../../components/button"
import StackLayout from '../../components/stackLayout'
import Label from "../../components/label"
import SearchBar from "../../components/searchBar"
import TextField from "../../components/textField"
import { setValueTrigger, setValueViaEvent } from "../components/valueHelpers"
import { goBack } from "../../util/navigateTo"

class PageSearchBar extends Component {
  setValue: Function
  onClear: Function
  onSubmit: Function
  constructor(props) {
    super(props)
    this.setValue = setValueViaEvent(this)
    this.onClear = setValueTrigger(this, "cleared")
    this.onSubmit = setValueTrigger(this, "submitted")
  }
  render() {
    return (
      <Page>
        <StackLayout>
          <SearchBar
            title="MyTitle"
            text={this.state.value}
            hint="Search"
            onClear={this.onClear}
            onTextChange={this.setValue}
            onSubmit={this.onSubmit}
          />
          <Label
            text={`Current state-controlled SearchBar Input is:`}
          />
          <Label
            text={JSON.stringify(this.state.value)}
          />
          <Label
            text={this.state.cleared ? "SearchBar was recently cleared" : "SearchBar clear button wasn't pressed recently"}
          />
          <Label
            text={this.state.submitted ? "SearchBar was recently submitted" : "SearchBar content wasn't recently submitted"}
          />
          <Button text="Back" onTap={goBack} />
        </StackLayout>
      </Page>
    )
  }
}

export default PageSearchBar
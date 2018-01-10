import { h, Component } from "../../preact"
import Page from "../../components/page"
import Button from "../../components/button"
import StackLayout from '../../components/stackLayout'
import Label from "../../components/label"
import ListView from "../../components/listView"
import SegmentedBarItem from "../../components/segmentedBarItem"
import TextField from "../../components/textField"
import { setValueTrigger, setValueViaEvent } from "../components/valueHelpers"
import { goBack } from "../../util/navigateTo"
import * as labelModule from "tns-core-modules/ui/label"
import render from "../../preact-nativescript-renderer"

class PageSegmentedBar extends Component {
  setValue: Function
  constructor(props) {
    super(props)
    this.state = {value: ["first", "second"]}
    this.setValue = setValueViaEvent(this)
  }
  render() {
    const items = this.state.value
    return (
      <Page>
        <StackLayout>
          <ListView
            items={items}
            onItemLoading={(args) => {
              args.view = render(<Label text={items[args.index]} />, null, args.view)
            }}
          />
          <Button text="Set List to 2 Entries" onTap={this.setValue.bind(this, {value: ["first", "second"]})} />
          <Button text="Set List to 5 Entries" onTap={this.setValue.bind(this, {value: ["completely", "second", "different", "list", "entries"]})} />
          <Button text="Back" onTap={goBack} />
        </StackLayout>
      </Page>
    )
  }
}

export default PageSegmentedBar
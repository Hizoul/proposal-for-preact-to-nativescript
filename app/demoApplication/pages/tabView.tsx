import { h, Component } from "../../preact"
import Page from "../../components/page"
import Button from "../../components/button"
import StackLayout from '../../components/stackLayout'
import Label from "../../components/label"
import Progress from "../../components/progress"
import TextField from "../../components/textField"
import TabView from "../../components/tabView"
import TabViewItem from "../../components/tabViewItem"
import ActionBar from "../../components/actionBar"
import { setValueTrigger, setValueViaEvent } from "../components/valueHelpers"
import { goBack } from "../../util/navigateTo"

class PageTabView extends Component {
  setValue: Function
  constructor(props) {
    super(props)
    this.setValue = setValueViaEvent(this)
  }
  render() {
    return (
      <Page>
        <ActionBar text="Tabs" />
        <StackLayout>
          <Label text={`Selection is ${this.state.value}`} />
          <TabView selectedIndex={this.state.value} onSelectedIndexChange={this.setValue}>
            <TabViewItem title="Tab1">
              <StackLayout>
                <Label text="Tab#1Content" />
              </StackLayout>
            </TabViewItem>
            <TabViewItem title="Tab2">
              <StackLayout>
                <Label text="Tab#2 More Content" />
              </StackLayout>
            </TabViewItem>
          </TabView>
        </StackLayout>
      </Page>
    )
  }
}

export default PageTabView
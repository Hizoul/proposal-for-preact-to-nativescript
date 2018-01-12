import { h, Component } from "../../preact"
import Page from "../../components/page"
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
import ActionItem from "../../components/actionItem"
import { goBack } from "../../util/navigateTo"

class PageActionBar extends Component {
  render() {
    return (
      <Page>
        <ActionBar>
          <StackLayout>
            <Label text="CustomBar" />
          </StackLayout>
          <ActionItem>
            <StackLayout>
              <Label text="CustomAction" />
            </StackLayout>
          </ActionItem>
          <ActionItem text="s" android={{systemIcon: "ic_menu_search"}} />
        </ActionBar>
        <StackLayout>
          <TextView text="ActionItem systemIcon and navigationbutton not showing otherwise fine" />
          <Button text="Back" onTap={goBack} />
        </StackLayout>
      </Page>
    )
  }
}

export default PageActionBar
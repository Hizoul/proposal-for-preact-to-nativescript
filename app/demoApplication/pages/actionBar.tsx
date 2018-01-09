import { h, Component } from "../../preact"
import Page from "../../components/page"
import Button from "../../components/button"
import StackLayout from '../../components/stackLayout'
import TextView from "../../components/textView"
import TextField from "../../components/textField"
import { goBack } from "../../util/navigateTo"
import ActionBar from "../../components/actionBar"

class PageActionBar extends Component {
  render() {
    return (
      <Page>
        <ActionBar title="MyTitle" />
      </Page>
    )
  }
}

export default PageActionBar
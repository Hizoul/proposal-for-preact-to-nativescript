import { h, Component } from "../../preact"
import Page from "../../components/page"
import Button from "../../components/button"
import StackLayout from '../../components/stackLayout'
import TextView from "../../components/textView"
import Border from "../../components/border"
import TextField from "../../components/textField"
import { goBack } from "../../util/navigateTo"
import ActivityIndicator from "../../components/activityIndicator"

class PageBorder extends Component {
  render() {
    return (
      <Page>
        <StackLayout>
            <TextView
              style="border-width: 10pt; border-radius: 10pt; border-color: #000000;"
              text="Doesn't work yet"
            />
        </StackLayout>
      </Page>
    )
  }
}

export default PageBorder
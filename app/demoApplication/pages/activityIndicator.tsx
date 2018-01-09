import { h, Component } from "../../preact"
import Page from "../../components/page"
import Button from "../../components/button"
import StackLayout from '../../components/stackLayout'
import TextView from "../../components/textView"
import TextField from "../../components/textField"
import { goBack } from "../../util/navigateTo"
import ActivityIndicator from "../../components/activityIndicator"

class PageActivityIndicator extends Component {
  render() {
    return (
      <Page>
        <StackLayout>
          <TextView text="Busy" />
          <ActivityIndicator busy={true} />
          <TextView text="Not Busy" />
          <ActivityIndicator busy={false} />
          <Button text="Back" onTap={goBack} />
        </StackLayout>
      </Page>
    )
  }
}

export default PageActivityIndicator
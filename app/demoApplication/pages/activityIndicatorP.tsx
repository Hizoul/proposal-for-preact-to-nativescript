import { h, Component } from "../../preact"
import Page from "../../components/page"
import Button from "../../components/button"
import StackLayout from '../../components/stackLayout'
import TextView from "../../components/textView"
import Label from "../../components/label"
import TextField from "../../components/textField"
import { goBack } from "../../util/navigateTo"
import ActivityIndicator from "../../components/activityIndicator"
import * as Router from "preact-router"
import holder from '../components/router';
class PageActivityIndicator extends Component {
  render() {
    return (
        <StackLayout key="activity">
          <Label text="Busy Label" />
          <ActivityIndicator busy={true} />
          <TextView text="Not Busy TextView" />
          <ActivityIndicator busy={false} />
          <Button text="Back" onTap={goBack} />
          <Button text="Visit" onTap={() => {
            holder.router.routeTo("/test")
          }} />
        </StackLayout>
    )
  }
}

export default PageActivityIndicator
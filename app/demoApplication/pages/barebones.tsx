import { h, Component } from "./preact"
import Page from "./components/page"
import Button from "./components/button"
import StackLayout from './components/stackLayout'
import TextView from "./components/textView"
import TextField from "./components/textField"
import { goBack } from "./util/navigateTo"

class BareBones extends Component {
  render() {return (
      <Page>
        <StackLayout>
          <Button text="Go Back" onTap={goBack} />
        </StackLayout>
      </Page>
    )
  }
}

export default BareBones
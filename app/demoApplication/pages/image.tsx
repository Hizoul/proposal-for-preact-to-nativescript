import { h, Component } from "../../preact"
import Page from "../../components/page"
import Button from "../../components/button"
import StackLayout from '../../components/stackLayout'
import Label from "../../components/label"
import Progress from "../../components/progress"
import Image from "../../components/image"
import { setValueTrigger, setValueViaEvent } from "../components/valueHelpers"
import { goBack } from "../../util/navigateTo"

class PageImage extends Component {
  render() {
    return (
      <Page cssFile="demoApplication/pages/start.css">
        <StackLayout>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/4/4f/NativeScript_logo.png" />
          <Button text="Back" onTap={goBack} />
        </StackLayout>
      </Page>
    )
  }
}

export default PageImage
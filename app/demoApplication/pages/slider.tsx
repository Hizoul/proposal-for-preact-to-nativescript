import { h, Component } from "../../preact"
import Page from "../../components/page"
import Button from "../../components/button"
import StackLayout from '../../components/stackLayout'
import Label from "../../components/label"
import Progress from "../../components/progress"
import Slider from "../../components/slider"
import { setValueTrigger, setValueViaEvent } from "../components/valueHelpers"
import { goBack } from "../../util/navigateTo"

class PageSlider extends Component {
  setValue: Function
  constructor(props) {
    super(props)
    this.setValue = setValueViaEvent(this)
  }
  render() {
    return (
      <Page>
        <StackLayout>
          <Slider onValueChange={this.setValue} value={this.state.value} maxValue={120} />
          <Label
            text={`(Min: 0, Max: 120) Current Slider Value: ${this.state.value}`}
          />
          <Label
            text={`Slidervalue mapped to Progress`}
          />
          <Progress value={this.state.value} />
          <Button text="Back" onTap={goBack} />
        </StackLayout>
      </Page>
    )
  }
}

export default PageSlider
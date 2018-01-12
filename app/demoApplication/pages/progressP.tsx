import { h, Component } from "../../preact"
import Page from "../../components/page"
import Button from "../../components/button"
import StackLayout from '../../components/stackLayout'
import Label from "../../components/label"
import Progress from "../../components/progress"
import TextField from "../../components/textField"
import { setValueTrigger, setValueViaEvent } from "../components/valueHelpers"
import { goBack } from "../../util/navigateTo"

class PageProgress extends Component {
  updateValue: Function
  intervalHandle: any
  constructor(props) {
    super(props)
    this.state = {value: 0}
    const thisRef = this
    this.updateValue = () => {
      let newVal = thisRef.state.value + 1
      if (newVal > 100) {
        newVal = 0
      }
      thisRef.setState({value: newVal})
    }
    this.intervalHandle = setInterval(this.updateValue, 50)
  }
  componentWillUnmount() {
    clearInterval(this.intervalHandle)
  }
  render() {
    return (
        <StackLayout key="progress">
          <Label
            text={`Increasing every 700ms`}
          />
          <Progress value={this.state.value} />
          <Button text="Back" onTap={goBack} />
        </StackLayout>
    )
  }
}

export default PageProgress
import { h, Component } from "../../preact"
import Page from "../../components/page"
import Button from "../../components/button"
import StackLayout from '../../components/stackLayout'
import Label from "../../components/label"
import SegmentedBar from "../../components/segmentedBar"
import SegmentedBarItem from "../../components/segmentedBarItem"
import TextField from "../../components/textField"
import { setValueTrigger, setValueViaEvent } from "../components/valueHelpers"
import { goBack } from "../../util/navigateTo"

class PageSegmentedBar extends Component {
  setValue: Function
  constructor(props) {
    super(props)
    this.setValue = setValueViaEvent(this)
  }
  render() {
    const childs = [
      <SegmentedBarItem key="1" title="First" />,
      <SegmentedBarItem key="2" title="Second" />
    ]
    if (this.state.value < 2) {
      childs.push(<SegmentedBarItem key="3" title="Third" />)
    }
    return (
      <Page>
        <StackLayout>
          <SegmentedBar onSelectedIndexChange={this.setValue}>
            {childs}
          </SegmentedBar>
          <Label text={`Selected Segment is ${this.state.value}`} />
          <Button text="Back" onTap={goBack} />
        </StackLayout>
      </Page>
    )
  }
}

export default PageSegmentedBar
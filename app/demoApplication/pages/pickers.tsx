import { h, Component } from "../../preact"
import Page from "../../components/page"
import Button from "../../components/button"
import StackLayout from '../../components/stackLayout'
import Label from "../../components/label"
import DatePicker from "../../components/datePicker"
import TimePicker from "../../components/timePicker"
import ListPicker from "../../components/listPicker"
import TextField from "../../components/textField"
import { setValueTrigger, setValueViaEvent } from "../components/valueHelpers"
import { goBack } from "../../util/navigateTo"
import ScrollView from '../../components/scrollView';

const items = [ "firstpick", "morepicks", "which", "one", "will", "it", "be"]

class PagePickers extends Component {
  setDateYear: Function
  setDateMonth: Function
  setDateDay: Function
  setTimeHour: Function
  setTimeMinute: Function
  setListPick: Function
  constructor(props) {
    super(props)
    this.setDateYear = setValueViaEvent(this, "dateYear")
    this.setDateMonth = setValueViaEvent(this, "dateMonth")
    this.setDateDay = setValueViaEvent(this, "dateDay")
    this.setTimeHour = setValueViaEvent(this, "timeHour")
    this.setTimeMinute = setValueViaEvent(this, "timeMinute")
    this.setListPick = setValueViaEvent(this, "listPick")
  }
  render() {
    return (
      <Page>
        <ScrollView>
        <StackLayout>
          <DatePicker
            onYearChange={this.setDateYear}
            onMonthChange={this.setDateMonth}
            onDayChange={this.setDateDay}
          />
          <Label
            text={`DatePicker Data (Year: ${this.state.dateYear} Month: ${this.state.dateMonth} Day: ${this.state.dateDay})`}
          />
          <TimePicker
            onHourChange={this.setTimeHour}
            onMinuteChange={this.setTimeMinute}
          />
          <Label
            text={`TimePicker Data (Hour: ${this.state.timeHour} Minute: ${this.state.timeMinute}`}
          />
          <ListPicker
            onSelectedIndexChange={this.setListPick}
            items={items}
          />
          <Label
            text={`ListPicker Data (#${this.state.listPick} ${items[this.state.listPick]})`}
          />
          <Button text="Back" onTap={goBack} />
        </StackLayout>
        </ScrollView>
      </Page>
    )
  }
}

export default PagePickers
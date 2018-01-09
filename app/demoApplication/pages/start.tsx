import { h, Component } from "../../preact"
import Page from "../../components/page"
import PageActionBar from "./actionBar"
import StackLayout from '../../components/stackLayout'
import TextView from "../../components/textView"
import TextField from "../../components/textField"
import navigateTo from '../../util/navigateTo'
import Comp2 from '../../comp2'
import Button from '../../components/button'


const visitor = (ev) => {
  console.log(`nav event`)
  navigateTo(<Comp2 />)
}

class Comp extends Component {
  render() {
    const setter = (ev) => {
      console.log(`ev val ${ev.value} ${typeof(ev.value)}`)
      this.setState({text: ev.value})
    }
    let text = this.state !== undefined && this.state !== null && this.state.text !== undefined  && this.state.text !== null ? this.state.text : "noStateYet"
    return (
      <Page text={text}>
        <StackLayout>
          <Button text="ActionBar" onTap={navigateTo.bind(null, <PageActionBar />)} />
        </StackLayout>
      </Page>
    )
  }
}

export default Comp
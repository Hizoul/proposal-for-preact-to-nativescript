import { h, Component } from "./preact"
import Page from "./components/page"
import Button from "./components/button"
import StackLayout from './components/stackLayout'
import TextView from "./components/textView"
import TextField from "./components/textField"
import { goBack } from "./util/navigateTo"

class Comp2 extends Component {
  render() {
    const setter = (ev) => {
      console.log(`ev val ${ev.value} ${typeof(ev.value)}`)
      this.setState({text: ev.value})
    }
    let text = this.state !== undefined && this.state !== null && this.state.text !== undefined  && this.state.text !== null ? this.state.text : "secondPage"
    return (
      <Page text={text}>
        <StackLayout>
          <TextView className="bigFont" text={text} />
          <TextField text={text} onTextChange={setter} />
          <Button text="Go Back" onTap={goBack} />
        </StackLayout>
      </Page>
    )
  }
}

export default Comp2
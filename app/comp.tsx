import { h, Component } from "./preact"
import Page from "./components/page"
import StackLayout from './components/stackLayout'
import TextView from "./components/textView"
import TextField from "./components/textField"

class Comp extends Component {
  render() {
    const setter = (ev) => {
      console.log(`ev val ${ev.value} ${typeof(ev.value)}`)
      this.setState({text: ev.value})
    }
    let text = this.state !== undefined && this.state !== null && this.state.text !== null ? this.state.text : "noStateYet"
    console.log("rendering again with " + text)
    return (
      <Page>
        <StackLayout>
          <TextField text={text} onTextChange={setter} />
          <TextView text={text} />
          <TextField text={text} onTextChange={setter} />
        </StackLayout>
      </Page>
    )
  }
}

export default Comp
import { h, Component } from "preact"
import Page from "./components/page"
import StackLayout from './components/stackLayout';
import TextView from "./components/textView"


class Comp extends Component<any, any> {
  render() {
    let text = this.state !== undefined && this.state !== null ? this.state.text : "noStateYet"
    return <Page>
      <StackLayout>
        <TextView my="prop" text={text}>{text}</TextView>
      </StackLayout>
    </Page>
  }
}

export default Comp
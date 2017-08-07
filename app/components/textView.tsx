import { h, Component } from "preact"


class TextViewContainer extends Component<any, any> {
  componentWillMount() {
    console.log(`Mounting component + timeout`)
    setTimeout(() => {
      console.log(`Updated Text State`)
      this.setState({text: "Updated Text"})
    }, 3000)
  }
  render() {
    const text = this.state !== null && this.state !== undefined ? this.state.text : `defaultText`
    const newProps = {text}
    return h('textview', newProps, [text])
  }
}

export default TextViewContainer
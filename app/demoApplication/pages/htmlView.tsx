import { h, Component } from "../../preact"
import Page from "../../components/page"
import Button from "../../components/button"
import StackLayout from '../../components/stackLayout'
import TextView from "../../components/textView"
import Label from "../../components/label"
import HtmlView from "../../components/htmlView"
import WebView from "../../components/webView"
import { goBack } from "../../util/navigateTo"
import { setValueTrigger, setValueViaEvent } from "../components/valueHelpers"
import ActivityIndicator from "../../components/activityIndicator"

class PageHtmlView extends Component {
  setLoad: Function
  constructor(props) {
    super(props)
    this.state = {loaded: "Loading WebView Content"}
    this.setLoad = (args) => {
      if (args.error) {
        this.setState({loaded: `error ${args.error}`})
      } else {
        this.setState({loaded: `successfully loaded ${args.url}`})
      }
    }
  }
  render() {
    return (
      <Page>
        <StackLayout>
          <Label text="HtmlView" />
          <HtmlView html='<span><font color="#ff0000">Test</font></span>' />
          <Button text="Back" onTap={goBack} />
          <Label text={this.state.loaded} />
          <WebView
            onLoadFinished={this.setLoad}
            src='https://github.com/Hizoul/proposal-for-preact-to-nativescript'
          />
        </StackLayout>
      </Page>
    )
  }
}

export default PageHtmlView
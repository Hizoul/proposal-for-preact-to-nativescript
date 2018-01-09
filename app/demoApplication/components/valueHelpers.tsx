import { h, Component } from "../../preact"
import Page from "../../components/page"
import Button from "../../components/button"
import StackLayout from '../../components/stackLayout'
import TextView from "../../components/textView"
import TextField from "../../components/textField"
import { goBack } from "../../util/navigateTo"
import ActionBar from "../../components/actionBar"


const setValueViaEvent = (thisRef: any, valKey: string = "value", eventKey: string = "value") => {
  return (ev) => {
    thisRef.setState({[valKey]: ev[eventKey]})
  }
}
const setValueTrigger = (thisRef: any, valKey: string = "value") => {
  return (ev) => {
    thisRef.setState({[valKey]: true})
    setTimeout(() => {
      thisRef.setState({[valKey]: false})
    }, 5000)
  }
}

export {
  setValueViaEvent,
  setValueTrigger
}
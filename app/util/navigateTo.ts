import * as frame from "tns-core-modules/ui/frame"
import { VNode } from 'preact';
import render from '../preact-nativescript-renderer';

const navigateTo = (comp: VNode) => {
  const topmost = frame.topmost()
  topmost.navigate(render.bind(this, comp))
}

const goBack = () => {
  const topmost = frame.topmost()
  topmost.goBack()
}

export default navigateTo
export {
  goBack
}
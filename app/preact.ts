declare const require: any
const importedPreact: any = require("./preactjs")

export default importedPreact
const h = importedPreact.h

interface ComponentClass {
  props: any
  setState: Function
}

const Component: preact.ComponentConstructor<any, any> = importedPreact.Component

const render = importedPreact.render

export {
  h, Component, render
}
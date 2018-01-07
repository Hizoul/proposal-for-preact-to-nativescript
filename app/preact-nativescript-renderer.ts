import { VNode } from 'preact';
declare const global: any

let TextElement: any

// stuff to mix into NS's view prototypes
let extensions = {
  setAttribute(name, value) {
    console.log("about to set attribute " + name + " to  " + value + " calling " + typeof(this.set))
    this.set(name, value)
  },
  removeAttribute(name) {
    console.log("about to reve attggribute " + name)
    this.set(name, null);
  },
  appendChild(child) {
    console.log("appending child")
    if ('text' in this && child.splitText!=null) {
      this.text = child.nodeValue;
    }
    else {
      this.childNodes.push(child)
      this.addChild(child);
    }
  },
  insertBefore(child, ref) {
    console.log("insertinbefore")
    // find the index at which to insert the child based on ref:
    let offset, index = -1;
    this.eachChild( c => {
      index++;
      if (c===ref) offset = index;
    });
    if (offset!=null) {
      this._addView(child, offset);
    }
    else {
      this.addChild(child)
      this.childNodes.push(child)
    }
  },
  removeChild(child) {
    console.log("removing")
    if ('text' in this && child.splitText!=null) {
      this.text = '';
    }
    else {
      const childIndex = this.childNodes.indexOf(child)
      if (childIndex !== -1) {
        this.childNodes.remove(childIndex, 1)
      }
      this._removeView(child);
    }
  }
};

const customDocument = {
  createElement(type) {
    // imports and augments NS view classes on first use
    type = type.toLowerCase();
    let el
    if (type in types) {
      el = types[type];
    } else {
      let elementRequirePath = 'tns-core-modules/ui/'
      if (type === "stacklayout") {
        elementRequirePath = "ui/layouts/stack-layout"
      } else if(type === "textfield") {
        elementRequirePath += "text-field"
      } else if(type === "textview") {
        elementRequirePath += "text-view"
      } else {
        elementRequirePath += type
      }
      let m = require(elementRequirePath);
      // find matching named export:
      for (let i in m) if (i.toLowerCase()===type) {
        el = m[i];
        break;
      }
      Object.assign(el.prototype, extensions);
      types[type] = el;
    }
    el = new el()
    el.__preactattr_ = {}
    el.childNodes = []
    el.set = (name, value) => {
      console.log("callinggset with " + name + " and " + value)
      el[name] = value
    }
    if (type === "page") {
      el.addChild = (addedChild) => {
        el.content = addedChild
        el.childNodes.push(addedChild)
      }
    }
    return el
  },
  createTextNode(text) {
    console.log("creating textnode" + text)
    let el = new TextElement();
    el.text = text;
    Object.defineProperty(el, 'nodeValue', {
      set(v) { console.log("abouttoset", v); this.text = v },
      get() { return this.text }
    });
    el.splitText = () => null;
    return el;
  },
  body: {
    childNodes: [],
    appendChild: (newChild) => {
      global.document.body.childNodes.push(newChild)
    }
  }
};

global.document = document
declare const require: (name: string) => any
const Preact = require('./preact')
var h = Preact.h
Text = require("tns-core-modules/ui/text-view").Text
let types = {};
// preact-render-to-nativescript
const render = (Component: VNode) => {
  Preact.render(h(Component), document.body)
  return document.body.childNodes[0]
}

export default render

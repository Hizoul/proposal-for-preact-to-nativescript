import { VNode } from 'preact';
declare const global: any

let TextElement: any

function findWhere(arr, fn, returnIndex, byValueOnly?) {
	let i = arr.length;
	while (i--) if (typeof fn==='function' && !byValueOnly ? fn(arr[i]) : arr[i]===fn) break;
	return returnIndex ? i : arr[i];
}


// stuff to mix into NS's view prototypes
let extensions = {
  setAttribute(name, value) {
    console.log("about to set attribute " + name + " to  " + value)
    this.set(name, value)
  },
  removeAttribute(name) {
    console.log("about to remove attggibute " + name)
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
    child.parentNode = this
  },
  insertBefore(child, ref) {
    console.log("insertinbefore")
    child.remove()
    // find the index at which to insert the child based on ref:
    let offset, index = -1;
    this.eachChild( c => {
      index++;
      if (c===ref) offset = index;
    });
    if (offset!=null) {
      this.childNodes.splice(offset, 0, child)
      this.addChild(child, offset);
    }
    else {
      this.addChild(child)
      this.childNodes.push(child)
    }
    child.parentNode = this
  },
  replaceChild(child, ref) {
    if (ref.parentNode===this) {
      this.insertBefore(child, ref);
      ref.remove();
    }
  },
  removeChild(child) {
    console.log(`removing ${child.nodeName} from ${this.nodeName}`)
    if ('text' in this && child.splitText!=null) {
      this.text = '';
    } else if (this.content !== null) { // if is page
      this.content = null
      this.childNodes = []
    } else {
      const childIndex = this.childNodes.indexOf(child)
      if (childIndex !== -1) {
        console.log("prev length" + this.childNodes.length)
        this.childNodes = this.childNodes.splice(childIndex, 1)
        console.log("newchildnodes length" + this.childNodes.length)
      }
      this.removeChild(child);
    }
    child.parentNode = null
  },
  remove() {
    if (this.parentNode) {
      this.parentNode.removeChild(this)
      this.parentNode = null
    }
  }
};

const document = {
  createElement(type) {
    console.log("got type", JSON.stringify(type))
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
      Object.defineProperty(el, 'firstChild', {
        get() { return this.childNodes[0] }
      })
      Object.defineProperty(el, 'lastChild', {
        get() { return this.childNodes[this.childNodes.length-1] }
      })
      Object.defineProperty(el, 'nextSibling', {
        get() {
          let p = this.parentNode
          if (p) return p.childNodes[findWhere(p.childNodes, this, true) + 1]
        }
      })
      Object.defineProperty(el, 'previousSibling', {
        get() {
          let p = this.parentNode
          if (p) return p.childNodes[findWhere(p.childNodes, this, true) - 1]
        }
      })
      types[type] = el;
    }
    el = new el()
    el.nodeType = type
    el.nodeName = type
    el.attributes = []
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
      set(v) { this.text = v },
      get() { return this.text }
    });
    el.splitText = () => null;
    return el;
  }
};

global.document = document
declare const require: (name: string) => any
const Preact = require('./preact')
var h = Preact.h
TextElement = require("tns-core-modules/ui/text-view").TextView
let types = {};
// preact-render-to-nativescript
const render = (Component: VNode) => {
  const renderBody = {
    childNodes: [],
    appendChild: (newChild) => {
      renderBody.childNodes.push(newChild)
    }
  }
  Preact.render(Component, renderBody)
  return renderBody.childNodes[0]
}

export default render

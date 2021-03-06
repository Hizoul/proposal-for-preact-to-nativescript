import { VNode } from 'preact';
declare const global: any

let TextElement: any
let Preact
function findWhere(arr, fn, returnIndex, byValueOnly?) {
	let i = arr.length;
	while (i--) if (typeof fn==='function' && !byValueOnly ? fn(arr[i]) : arr[i]===fn) break;
	return returnIndex ? i : arr[i];
}

let currentPage: any

const makeSame = (orig, makeToThis) => {
}

// stuff to mix into NS's view prototypes
// mostly copied from Node in undom (https://github.com/developit/undom/blob/master/src/undom.js)
let extensions = {
  setAttribute(name, value) {
    console.log("about to set attribute " + name + " to  " + value)
    this.set(name, value)
  },
  getAttribute(name) {
    return this[name]
  },
  removeAttribute(name) {
    console.log("about to remove attggibute " + name)
    this.set(name, null);
  },
  getAttributeNS(ignored, name, value) {
    return this[name]
  },
  setAttributeNS(ignored, name, value) {
    console.log("about to set attribute " + name + " to  " + value)
    this.set(name, value)
  },
  removeAttributeNS(name) {
    delete this[name]
  },
  // Wrapper because some NativeScript Elements don't have addChild
  callAddChild(child, offset) {
    if (this.nodeName === "SEGMENTEDBAR" || this.nodeName === "TABVIEW") {
      this.items = this.childNodes.slice(0)
    } else if (this.nodeName === "TABVIEWITEM") {
      this.view = child
    } else if (this.nodeName === "PAGE") {
      if (child.nodeName === "ACTIONBAR") {
        this.actionBar = child
      } else {
        this.content = child
      }
    } else if (this.nodeName === "ACTIONBAR") {
      if (child.nodeName === "ACTIONITEM") {
        this.actionItems.addItem(child)
      } else if (child.nodeName === "NAVIGATIONBUTTON") {
        console.log("SETTING NAVBUTT")
        this.navigationButton = child
        console.log("successfully set navbutt")
      } else {
        this.titleView = child
      }
    } else if (this.nodeName === "ACTIONITEM" || this.nodeName === "NAVIGATIONBUTTON") {
      this.actionView = child
    } else if (this.nodeName === "SCROLLVIEW") {
      this.content = child
    } else {
      this.addChild(child, offset)
    }
    
  },
  appendChild(child) {
    console.log(`appending ${child.nodeName} to ${this.nodeName}`, Object.keys(this))
    if ('text' in this && child.splitText!=null) {
      this.text = child.nodeValue;
    }
    else {
      this.childNodes.push(child)
      child.parentNode = this
    }
    this.callAddChild(child)
  },
  insertBefore(child, ref) {
    console.log(`inserting ${child.nodeName} before ${ref.nodeName} in  ${this.nodeName}`)
    child.remove()
    // find the index at which to insert the child based on ref:
    let offset = this.childNodes.indexOf(ref)
    child.parentNode = this
    console.log(`found offset is ${offset} ${this.childNodes.length}`)
    if (offset !== undefined && offset !== null) {
      this.childNodes.splice(offset, 0, child)
      this.callAddChild(child, offset);
    } else {
      this.childNodes.push(child)
      this.callAddChild(child)
    }
  },
  replaceChild(child, ref) {
    console.log(`replacing ${child.nodeName} with ${ref.nodeName}`)
    if (ref.parentNode===this) {
      ref.remove()
      this.insertBefore(child, ref)
    }
  },
  // Wrapper because some NativeScript Elements don't have removeChild
  callRemoveChild(child) {
    if (this.nodeName === "SEGMENTEDBAR") {
      this.items = this.childNodes.slice(0)
    } else if (this.nodeName === "PAGE") {
      if (child.nodeName === "ACTIONBAR") {
        if (this.actionBar === child) {
          this.actionBar = null
        }
      } else if (this.content === child) {
        this.content = null
      }
    } else if (this.nodeName === "ACTIONBAR") {
      if (child.nodeName === "ACTIONITEM") {
        this.actionItems.removeItem(child)
      } else if (child.nodeName === "NAVIGATIONBUTTON") {
        if (this.navigationButton === child) {
          this.navigationButton = null
        }
      } else {
        this.titleView = null
      }
    } else if (this.nodeName === "ACTIONITEM" || this.nodeName === "NAVIGATIONBUTTON") {
      this.actionView = null
    } else if (this.nodeName === "SCROLLVIEW") {
      this.content = null
    } else {
      if (this.removeChild === undefined || this.removeChild === null) {
        this._removeView(child)
      } else {
        this.removeChild(child)
      }
    }
    
  },
  removeChild(child) {
    console.log(`removing ${child.nodeName} from ${this.nodeName}`)
    if ('text' in this && child.splitText!=null) {
      this.text = '';
    } else {
      const childIndex = this.childNodes.indexOf(child)
      if (childIndex !== -1) {
        this.childNodes.splice(childIndex, 1)
      }
      this.callRemoveChild(child);
    }
    child.parentNode = null
  },
  // loaded and unloaded for possible native navigation but remount not working yet
  remove() {
    if (this.parentNode) {
      this.parentNode.removeChild(this)
      this.parentNode = null
    }
  },
  remount() {
    // this.renderedInto = Preact.render(this.renderedComponent)
    // this.content = this.renderedInto.content
  }
};
const isUpperCase = (inspect: string) => inspect === inspect.toUpperCase()

const convertType = (type: string) => {
  if (type.toLowerCase() === "tabviewitem") {
    return "tab-view"
  }
  if (type.toLowerCase() === "segmentedbaritem") {
    return "segmented-bar"
  }
  if (type.toLowerCase() === "actionitem" || type.toLowerCase() === "navigationbutton") {
    return "action-bar"
  }
  let newType = ""
  for (let i = 0; i < type.length; i++) {
    const char = type.charAt(i)
    newType += isUpperCase(char) ? `-${char.toLowerCase()}` : char
  }
  return newType
}

const document = {
  createElement(type) {
    if (type === "undefined") {
      type = "stackLayout"
    }
    // imports and augments NS view classes on first use
    const originalType = type
    type = type.toLowerCase()
    let el
    if (type in types) {
      el = types[type];
    } else {
      let elementRequirePath = 'tns-core-modules/ui/'
      if (type.indexOf("layout") !== -1) {
        elementRequirePath += "layouts/"
      }
      elementRequirePath += convertType(originalType)
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
    el.loaded = false
    el.firstLoad = true
    el.nodeType = 1
    el.nodeName = type.toUpperCase()                                                   
    el.attributes = []
    el.childNodes = []
    el.set = (name, value) => {
      console.log("callinggset with " + name + " and " + value)
      el[name] = value
    }
    // if (type === "page") {
    //   // loaded and unloaded for possible native navigation but remount not working yet
    //   el.on("unloaded", (a, b) => {
    //     console.log(`unloaded page ${typeof(a)} ${typeof(b)}`, Object.keys(a))
    //     if (el.loaded) {
    //       el.remove()
    //     }
    //     el.loaded = false
    //   })
    //   el.on("loaded", (a, b) => {
    //     console.log(`loaded page ${typeof(a)} ${typeof(b)}`, Object.keys(a))
    //     if (!el.firstLoad && !el.loaded) {
    //       el.remount()
    //     }
    //     if (el.firstLoad) {
    //       el.firstLoad = false
    //     }
    //     el.loaded = true
    //     el.on("_tearDownUI", (a) => {
    //       console.log(`got teardown ui`, Object.keys(a))
    //     })
    //     el.on("_removeViewFromNativeVisualTree", (a) => {
    //       console.log(`got teardown ui`, Object.keys(a))
    //     })
    //   })
    // }
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
}

global.document = document
declare const require: (name: string) => any
Preact = require('./preact')
var h = Preact.h
TextElement = require("tns-core-modules/ui/text-view").TextView
let types = {};
// preact-render-to-nativescript
const render = (Component: VNode, parent?: any, merge?: any) => {
  if (parent === undefined || parent === null) {
    parent = {
      nodeType: "artificalParent",
      nodeName: "artificalParent",
      attributes: [],
      childNodes: [],
      renderedComponent: null,
      mergeInto: null,
      renderedInto: null,
      appendChild: (newChild) => {
        if (newChild.cssFile) {
          newChild.addCssFile(newChild.cssFile)
        }
        parent.childNodes.push(newChild)
        newChild.parentNode = parent
        newChild.renderedComponent = parent.renderedComponent
        newChild.mergeInto = parent.mergeInto
      },
      removeChild: (child) => {
        console.log("attempting to remove body child")
        const childIndex = parent.childNodes.indexOf(child)
        if (childIndex !== -1) {
          parent.childNodes.splice(childIndex, 1)
        }
      },
      remove: () => {
        console.log("attempting to remove body")
        // for (const child of parent.childNodes) {
        //   child.remove()
        // }
        // delete parent.nodeType
        // delete parent.nodeName
        // delete parent.attributes
        // delete parent.childNodes
        // parent = null
      }
    }
  }
  parent.renderedComponent = Component
  parent.mergeInto = merge
  const renderedInto = Preact.render(Component, parent, merge)
  for (const child of parent.childNodes) {
    child.renderedInto = renderedInto
  }
  return parent.childNodes[0]
}

export default render

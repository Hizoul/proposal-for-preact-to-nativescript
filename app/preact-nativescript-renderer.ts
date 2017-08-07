import { VNode } from "preact"
import { Page } from "tns-core-modules/ui/page"
import { Label } from "tns-core-modules/ui/label"
import { TextView } from "tns-core-modules/ui/text-view"
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout"
import { Observable, fromObjectRecursive } from "tns-core-modules/data/observable"

const isNil = (a: any) => a === undefined || a === null
const isString = (a: any) => typeof(a) === "string"
const alreadyRendered = (component: JSX.Element) => isString(component.nodeName)
const initComponent = (component: JSX.Element) => typeof(component.nodeName) === "function" ? 
new component.nodeName(prepComponentProps(component)) : null

const NS_COMP_REF = "nativescriptComponent"
const NS_OBSV_REF = "nativescriptObservable"

const nodeNames = {
  page: "page"
}

const shallowClone = (obj: any) => {
  const newObj = {}
  for (const i in obj) {
    newObj[i] = obj[i]
  }
  return newObj
}

const copyToObservable = (obsv: Observable, obj: any) => {
  if (isNil(obj)) {
    return
  }
  // TODO: deepcopy
  for (const i in obj) {
    obsv.set(i, obj[i])
  }
}

const prepComponentProps = (component: JSX.Element) => {
  const attribs: any = shallowClone(component.attributes)
  attribs.children = component.children
  return attribs
}

const stackLayoutMaker = (component: JSX.Element) => {
  console.log(`ABOUT TO RENDER ${getNodeName(component)}`)
  const stackLayoutInstance = new StackLayout()
  component[NS_COMP_REF] = stackLayoutInstance
  for (const child of component.children) {
    stackLayoutInstance.addChild(walkTree(child, component))
  }
  return stackLayoutInstance
}

const textViewMaker = (component: JSX.Element) => {
  const hasNsComponent = !isNil(component[NS_COMP_REF])
  console.log(`Has NS Comp ${hasNsComponent}`)
  if (hasNsComponent) {
    console.log(`Found previous ns component`, component[NS_COMP_REF])
    copyToObservable(component[NS_OBSV_REF], component.state)
    console.log(`Applied state update ${JSON.stringify(component.state)}`)
  } else {
    const textView = new TextView()
    const text = isString(component.attributes.text) ? component.attributes.text : "notextsetyet"
    textView.text = text
    component[NS_COMP_REF] = textView
    const untypedComp: any = component
    if (untypedComp.parent) {
      addChild(untypedComp.parent, component)
    }
    console.log(`COMPONENTS PARENTS ARE ${component.parent}`)
    // console.log(`RENDERED TEXTVIEW IS ${JSON.stringify(component)}`)
    // console.log(`ABOUT TO CREATE TEXTVIEW ${JSON.stringify(component)}`)
    return textView
  }
}

const mapStringToNativescriptElement = (name: string, component: VNode) => {
  console.log(`TRYING TO MAP ${name}`)
  if (!isString(name)) {
    return
  }
  switch (name.toLowerCase()) {
    case "stacklayout": {
      return stackLayoutMaker(component)
    }
    case "textview": {
      return textViewMaker(component)
    }
    default: {
      return walkTree(component.childRefs[0], component)
    }
  }
}

const getNodeName = ({nodeName}: JSX.Element) => {
  return typeof(nodeName) === "function" ? nodeName.name : nodeName
}

const lookForPage = (component: JSX.Element) => {
  if (isNil(component) || typeof(component.nodeName) !== "function") {
    throw new Error("Expecting a Renderable Component as Root")
  }
  const instance = new component.nodeName(prepComponentProps(component))
  const rendered = instance.render()
  if (getNodeName(rendered).toLocaleLowerCase() !== nodeNames.page) {
    throw new Error("Expecting Page Component at root!")
  }
  return rendered
}

const convertComponent = (component: JSX.Element): any => {
  const label = new Label()
  label.text = "TS Page"
  console.log(`Trying to render ${getNodeName(component)} ${JSON.stringify(component.children)}`)

  return mapStringToNativescriptElement(getNodeName(component), component)
}

function extend(obj, props) {
	for (let i in props) obj[i] = props[i];
	return obj;
}

const addChild = (parent, child) => {
  if (parent.childRefs === undefined || parent.childRefs === null) { // TODO: check isArray
    parent.childRefs = []
  }
  parent.childRefs.push(child)
}

const walkTree = (vnode: VNode | string | undefined, parent?) => {
  console.log(`Walking tree with ${getNodeName(vnode)}`)
  if (vnode === undefined || vnode === null) {
    console.error(`Received undefined in walkTree`)
    return
  }

  if (typeof(vnode) === "string") {
    console.log(`Received String ${vnode}`)
    return
  }

  const { attributes } = vnode;
  let { nodeName, children } = vnode;

  // Component
  if (typeof nodeName === "function") {
      let rendered;
      let c: any
      const props = prepComponentProps(vnode);

      if (
        !nodeName.prototype ||
        typeof nodeName.prototype.render !== "function"
      ) {
        rendered = (nodeName as any)(props, undefined);
        rendered.parent = parent
      } else {
        // Class components
        c = new nodeName(props, undefined);
        if (!c.hookedIntoState) {
          // getting render updates is hardcoded into preact components
          // thats why we have to hook ourselves into Component.setState
          console.log(`MODIFYING PROTOTYPE OF ${getNodeName(vnode)}`)
          c.hookedIntoState = true
          c.nodeName = getNodeName(vnode)
          if (parent) {
            c.parent = parent
            addChild(parent, c)
          }
          let newStateFunc = (thisRef, newState) => {
            if (isNil(thisRef.state)) {
              thisRef.state = {}
            }
            let s = thisRef.state
            extend(s, typeof(newState) === "function" ? newState(s, thisRef.state) : newState)
            console.log(`new vnode state is ${thisRef.parent} ${thisRef.hookedIntoState} ${thisRef.key} ${JSON.stringify(thisRef.state)} ${thisRef[NS_COMP_REF]} ${thisRef.children}`)
            thisRef.parent[NS_COMP_REF].removeChild(thisRef.childRefs[0][NS_COMP_REF])
            thisRef.parent[NS_COMP_REF].addChild(walkTree(thisRef.render(thisRef.props, thisRef.state), c))
          }
          c.setState = newStateFunc.bind(c, c)
        }
        console.log(`GOT MOUNT ${typeof(c.componentWillMount)}`)
        if (c.componentWillMount !== undefined) {
          console.log(`Calling componentWillMount`)
          c.componentWillMount();
        }
        rendered = c.render(props, undefined);
        console.log(`rendered to ${getNodeName(rendered)}`)
      }
      return walkTree(rendered, c)
  }
  const untypedNode: any = vnode
  if (!isNil(parent) && isNil(untypedNode.parent)) {
    untypedNode.parent = parent
  }
  return mapStringToNativescriptElement(getNodeName(vnode), vnode)

}

const renderPage = (component: JSX.Element) => {
  const rootPage = lookForPage(component)
  const page = new Page()
  page.content = walkTree(rootPage.children[0])
  return page
}


const renderToNativeScript = (component: JSX.Element) => {
  return renderPage(component)
}

export default renderToNativeScript
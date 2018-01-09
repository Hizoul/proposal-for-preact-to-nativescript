import * as Preact from "./preact"
const h = Preact.h
import DemoApp from "./demoApplication/pages/start"
import * as application from "tns-core-modules/application"
import render from "./preact-nativescript-renderer"

const app: any = application

app.setCssFileName("app.css")

app.start({
  create: function () {
    return render(<DemoApp />)
  }
})

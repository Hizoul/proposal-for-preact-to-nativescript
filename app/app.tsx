import * as Preact from "./preact"
const h = Preact.h
import PageComponent from "./comp"
import * as application from "application"
import render from "./preact-nativescript-renderer"

const app: any = application

app.start({
  create: function () {
    return render(<PageComponent />)
  }
})

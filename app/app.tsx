import * as Preact from "preact"
import { h } from "preact"
import Page from "./comp"
import * as applicationModule from "application"
import render from "./preact-nativescript-renderer"


applicationModule.start({
  create: function () {
    return render(<Page />)
  }
})

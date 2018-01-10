# Preact and NativeScript

Building upon [this document implementation](https://github.com/staydecent/nativescript-preact/issues/4#issuecomment-323900569) [by developit](https://github.com/developit) preact-to-nativescript simulates a web document similar to [undom](https://github.com/developit/undom) that enables preact to render to NativeScript

## Whats tested
- Currently all this is was only tested on Android!
- Basic handling of events (onTap, onTextChange, onSubmit, onClear)
- Adjusting UI to state changes
- Styling by using className or id as identifier
- Basic Navigation by [navigating to element](https://docs.nativescript.org/core-concepts/navigation#example-3--how-to-navigate-to-a-page-dynamically-created-via-code)

![Demo](https://github.com/Hizoul/proposal-for-preact-to-nativescript/raw/master/demo.gif)

## What needs to be done
- Try out and add wrappers for all NativeScript components
  - (basics tested and got wrappers) Page, Button, TextField, TextView
  - (requires some work because it uses a special ref syntax for nativescript) ActionBar
  - (requires some more work documentation on nativescript side is sparse and addChild method is missing for component) Border
  - (tested and in demo app) Label
  - (tested and in demo app) SearchBar
  - (tested and in demo app) Switch
  - (tested and in demo app) Slider
  - (tested and in demo app) Progress
  - (tested and in demo app) ActivityIndicator
  - (tested and in demo app) Image
  - ListView
  - (tested and in demo app) HtmlView
  - (tested and in demo app) WebView
  - TabView
  - (tested and in demo app) SegmentedBar
  - DatePicker
  - TimePicker
  - ListPicker
  - Dialogs
  - Layouts
    - AbsoluteLayout
    - DockLayout
    - GridLayout
    - Stacklayout
    - WrapLayout
    - FlexboxLayout
- Figure out why componentWillUnomount in progress example is not being called
- Try a more sophisitcated rendering example
- Documentation
- See if preact changes may be merged into the actual lib so no custom one needs to be used
- Clean up code (many ugly typescript hacks, no proper docs and typings used etc.)
- Probably a lot more hiccups that need fixing but aren't in scope yet
- Unmounting on Go Back
- Write tests for the code
- Split up Library into pure renderer and convienence JSX-Helpers for minimal code per wanted lib
- Demo Application
## Running the Demo
Assuming nativescript & typescript is setup

`npm install && nativescript run <platform>`

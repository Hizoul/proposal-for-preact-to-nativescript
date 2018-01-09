# Preact and NativeScript

Building upon [this document implementation](https://github.com/staydecent/nativescript-preact/issues/4#issuecomment-323900569) [by developit](https://github.com/developit) preact-to-nativescript simulates a web document similar to [undom](https://github.com/developit/undom) that enables preact to render to NativeScript

## Whats tested
- Basic handling of events (onTap, onTextChange)
- Adjusting UI to state changes
- Styling by using className or id as identifier
- Basic Navigation by [navigating to element](https://docs.nativescript.org/core-concepts/navigation#example-3--how-to-navigate-to-a-page-dynamically-created-via-code)

## What needs to be done
- Try out and add wrappers for all NativeScript components
  - (basics tested and got wrappers) Page, Button, TextField, TextView
  - (requires some work because it uses a special ref syntax for nativescript) ActionBar
  - (requires some more work documentation on nativescript side is sparse and addChild method is missing for component) Border
  - Label
  - SearchBar
  - Switch
  - Slider
  - Progress
  - (tested and in demo app) ActivityIndicator
  - Image
  - ListView
  - HtmlView
  - WebView
  - TabView
  - SegmentedBar
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
- Try a more sophisitcated rendering example
- Documentation
- See if preact changes may be merged into the actual lib so no custom one needs to be used
- Clean up code (many ugly typescript hacks etc.)
- Probably a lot more hiccups that need fixing but aren't in scope yet
- Write tests for the code
- Split up Library into pure renderer and convienence JSX-Helpers for minimal code per wanted lib
- Demo Application

## Usage
Assuming nativescript & typescript is setup

`npm install && nativescript run <platform>`

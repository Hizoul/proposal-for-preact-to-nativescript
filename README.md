# Preact and NativeScript

Building upon [this document implementation](https://github.com/staydecent/nativescript-preact/issues/4#issuecomment-323900569) [by developit](https://github.com/developit) preact-to-nativescript simulates a web document similar to [undom](https://github.com/developit/undom) that enables preact to render to NativeScript

## Whats tested
- Currently all this is was only tested on Android!
- Basic handling of events (onTap, onTextChange, onSubmit, onClear)
- Adjusting UI to state changes
- Styling by using className or id as identifier
- Navigation
  - Basic Navigation by [navigating to element](https://docs.nativescript.org/core-concepts/navigation#example-3--how-to-navigate-to-a-page-dynamically-created-via-code) but doesn't unload / unmount / remount properly yet
  - Navigation also possible by using preact-router (not fully functional because on back press undefined error because of conflicting custom preact version that doesn't get loaded by preact-router so should work)
  - Navigation also possible via custom js code see custom-router for reference

![Demo](https://github.com/Hizoul/proposal-for-preact-to-nativescript/raw/master/demo.gif)

## What needs to be done
- (done in demo app) Try out and add wrappers for all NativeScript components
- Try a more sophisitcated rendering example
- Documentation
- See if preact changes may be merged into the actual lib so no custom one needs to be used
- Clean up code (many ugly typescript hacks, no proper docs and typings used etc.)
- Probably a lot more hiccups that need fixing but aren't in scope yet
- Write tests for the code
- Split up Library into pure renderer and convienence JSX-Helpers for minimal code per wanted lib
- Demo Application
- ActionBar Known Limitations
  - SystemIcon is not respected
  - NavigationButton doesn't properly render

## Running the Demo
Assuming nativescript & typescript is setup

`npm install && nativescript run <platform>`

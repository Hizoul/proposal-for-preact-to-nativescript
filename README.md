# Preact and NativeScript

Building upon [this document implementation](https://github.com/staydecent/nativescript-preact/issues/4#issuecomment-323900569) [by developit](https://github.com/developit) preact-to-nativescript simulates a web document similar to [undom](https://github.com/developit/undom) that enables preact to render to NativeScript

## Whats tested
- Basic handling of events (onTap, onTextChange)
- Adjusting UI to state changes
- Styling by using className or id as identifier
- Basic Navigation by [navigating to element](https://docs.nativescript.org/core-concepts/navigation#example-3--how-to-navigate-to-a-page-dynamically-created-via-code)

## What needs to be done
- Try out and add wrappers for all NativeScript components
- Try a more sophisitcated rendering example
- Documentation
- See if preact changes may be merged into the actual lib so no custom one needs to be used
- Probably a lot more hiccups that need fixing but aren't in scope yet

## Usage
Assuming nativescript & typescript is setup

`npm install && nativescript run <platform>`

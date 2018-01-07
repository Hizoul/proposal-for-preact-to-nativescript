# Preact and NativeScript

Building upon [this document implementation](https://github.com/staydecent/nativescript-preact/issues/4#issuecomment-323900569) [by developit](https://github.com/developit) preact-to-nativescript simulates a web document similar to [undom](https://github.com/developit/undom) that enables preact to render to NativeScript

## Whats tested
- Basic handling of events
- Adjusting UI to state changes

## What needs to be done
- Styling
- Try out and add wrappers for all NativeScript components
- Routing
- Try a more sophisitcated rendering example
- Documentation
- See if preact changes can and may be merged into the actual lib so no custom one needs to be used

## Usage
Assuming nativescript & typescript is setup

`npm install / yarn && tsc && nativescript run <platform>`

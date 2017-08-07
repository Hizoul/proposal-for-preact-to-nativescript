# Preact and NativeScript

Building upon [this try](https://github.com/staydecent/nativescript-preact) I suggest in this approach to not use undom as a middle layer. A real preact-to-nativescript lib should directly translate jsx-elements to typescript, similar to [ink](https://github.com/vadimdemedes/ink) or [preact-server-render](https://github.com/marvinhagemeister/preact-server-renderer)

## What works
Super basic translation and on change complete rebuilding the native components (so no real state sync efficient rendering or anything yet)

## How the rest could be accomplised

Basically copy most of preacts vdom rendering code, since except for the dom-usage it's portable and only dependent on JSX.
The State of a nativescript component is a simple observable which could easily be synced up with either state or props or both.

This is the point where I am currently stuck. Although "not that much" code is required for rendering and syncing with dom in preact the thought process and logic behind it is huge. reconciliation, when to replace components, how to figure out if a render is the same as before etc. via recursive tree walking is something i have not figured out completely yet. I unfortunately currently lack the time to explore this as much is id like to in order to figure it out completely.

Just thought I'd share this try with you @staydecent to show you an alternative approach to the problem. Thank you for sharing your first approach. I wouldn't have been able to come up with any of this without a proper example like the one you provided! I hope this code and README can somehow do the same for you or someone else interested in making this a reality.

## Usage
Assuming nativescript & typescript is setup

`npm install / yarn && tsc && nativescript run <platform>`
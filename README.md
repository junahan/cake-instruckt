# cake-instruckt

Visual feedback tool for AI coding agents. Click on any element in your app, leave a note, capture screenshots, and copy structured markdown to paste into your AI agent.

Framework-agnostic JS core with adapters for Livewire, Vue, Svelte, and React.

## Why cake-instruckt?

[instruckt](https://github.com/joshcirre/instruckt) is the original visual feedback tool that turns element-level comments, framework context, and screenshots into structured markdown for AI coding agents.

`cake-instruckt` is an independent open-source project inspired by instruckt. It keeps the original annotation workflow and compatible core API, while focusing on an extensible toolbar that applications can adapt to their own development workflows.

| | instruckt | cake-instruckt |
|---|---|---|
| Package | `instruckt` | `cake-instruckt` |
| Core workflow | Visual annotations and screenshots for AI agents | The same familiar annotation workflow |
| Toolbar | Built-in tools with visibility configuration | Ordered built-in tools, dividers, and application-defined buttons |
| Custom actions | Fixed to the provided toolbar actions | Async runtime callbacks with active-state and tooltip updates |
| Error handling | Built-in action handling | Optional `onToolbarActionError` callback for custom actions |

This project is maintained and released separately from instruckt. Thanks to the original project and its contributors for the ideas and foundation that made this project possible.

See the [changelog](CHANGELOG.md) for changes in each released version.

## Install

```bash
npm install cake-instruckt
```

## Example

The [`examples/toolbar-custom-buttons`](examples/toolbar-custom-buttons) test bench demonstrates the extensible toolbar. It combines built-in tools with dividers and application-defined buttons, including:

- a synchronous action that updates its active state and tooltip;
- an asynchronous action with progress feedback;
- a failing action handled through `onToolbarActionError`;
- an event log for observing callback results.

Run the example locally:

```bash
npm install
npm run test:toolbar
```

Then open [http://localhost:4174](http://localhost:4174).

## Features

- **Framework detection** — automatically identifies Livewire, Vue, Svelte, and React components with full component stacks and precise source locations (file:line:column) via [element-source](https://github.com/aidenybai/element-source)
- **Screenshots** — capture element or region screenshots; uses DOM-to-image on standard apps, automatically falls back to Screen Capture API on shadow DOM frameworks (Flux UI, etc.)
- **Shadow DOM isolation** — all UI renders in shadow roots so it never conflicts with your styles
- **Copy as markdown** — annotations auto-copy as structured markdown optimized for AI agents
- **Freeze mode** — pause animations, freeze popovers/dropdowns, and block all navigation
- **Annotation persistence** — annotations survive page reloads via localStorage; with a backend (Vite plugin or Laravel), annotations are stored on disk as JSON
- **Minimize** — collapse to a small floating button with annotation count badge
- **Page-scoped markers** — annotation pins reposition on scroll/resize and only appear on the page where they were created
- **Clear controls** — clear current page (`X` key or trash icon), or clear all pages via flyout
- **SPA navigation** — survives `wire:navigate`, Inertia, Vue Router, React Router, and browser back/forward

## License

MIT

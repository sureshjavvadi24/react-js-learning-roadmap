# React Basics Using CDN and `React.createElement()`

## Overview

- **React** is a JavaScript library for building user interfaces.
- To use React without build tools, inject React using the CDN links for **React** and **ReactDOM** in your HTML.

## Creating Elements

Use `React.createElement(type, props, children)` to create React elements.

- **type**: HTML tag or React component type (e.g., `"div"`, `"h1"`).
- **props**: Attributes or props as an object (e.g., `{ id: "parent" }`).
- **children**: Content or nested elements.

Example:

```js
const heading = React.createElement("h1", {}, "Hello world!");
```

## Rendering Elements

- Create a root container with `ReactDOM.createRoot(container)`.
- Render the React element using `root.render(element)`.

Example:

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

> **Note**: Calling `root.render()` replaces all content inside the root container.

## Nested Elements

To create nested elements, nest calls to `React.createElement()` as children:

```js
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am an h1 tag")
  )
);
```

## Sibling Elements

To create sibling elements, pass an array as the children argument:

```js
const parent2 = React.createElement("div", { id: "parent2" }, [
  React.createElement("h1", {}, "I am an h1 tag"),
  React.createElement("h2", {}, "I am an h2 tag"),
  React.createElement("h3", {}, "I am an h3 tag"),
]);
```

## Nested Elements with Siblings

You can mix nesting and siblings by passing arrays inside nested elements:

```js
const parent3 = React.createElement("div", { id: "parent3" }, [
  React.createElement("div", { id: "child3" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
    React.createElement("h3", {}, "I am an h3 tag"),
  ]),
  React.createElement("div", { id: "child32" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
    React.createElement("h3", {}, "I am an h3 tag"),
  ]),
]);
```

# Important Notes

- Always include React and ReactDOM CDN scripts **before** your app's JavaScript script in the HTML file.
- Each call to `root.render()` **replaces** the existing content inside the root element.

---

# React Root Element and Usage

- React renders content inside a single _root_ DOM element, which is usually a container like `<div id="root"></div>` in your HTML.
- This root element is where React takes control of updating and managing the UI with its virtual DOM.

## Key Points

- You can use React for **any portion** of your web app by having a root element for that section.
- Typically, an app uses one root for the entire UI, created with:
- React can also have **multiple roots** on a single page, each managing a different part of the DOM independently:

---

**For runnable React js examples, see the [Example Code](../../examples/basics/1-hello-world).**

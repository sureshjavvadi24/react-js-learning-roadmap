# Foundation Laying: Scripts, JSX, and React Components

## npm Scripts to Build the Project

You can define scripts in your `package.json` to easily run and build your app:

```js
"scripts": {
"start": "parcel index.html",
"build": "parcel build index.html"
}
```

- After this setup, you can run:
  - `npm run start` — to start a development build with a local server.
  - `npm run build` — to create a production build.
- Shortcut:
  - `npm start` works as a shortcut for `npm run start`.

---

## Creating React Elements: JSX vs React.createElement

### JSX

- JSX is an **HTML-like syntax** used to create React elements.
- It looks like HTML but is **not exactly HTML or JavaScript**.

Example JSX:

```js
const jsxHeading = <h1 className="heading">Hello World from JSX!</h1>;
root.render(jsxHeading);
console.log(jsxHeading);
```

- JSX is **not pure JavaScript** and **cannot be understood directly by JavaScript engines**.
- JSX is transpiled into `React.createElement()` calls by tools like **Parcel with Babel** before running in the browser.
- Babel also enables support for older JavaScript versions.

### Differences between HTML and JSX

- JSX uses **camelCase for attributes** instead of HTML attribute names.  
  Example: `class` in HTML becomes `className` in JSX.
- To write multi-line JSX, wrap it in parentheses:

```js
const jsxParagraph = (
  <p className="paragraph">
    {" "}
    This is a paragraph created using JSX syntax in React.{" "}
  </p>
);
```

## React Components

There are two types of React components:

- **Class-Based Components**
- **Functional Components**

### Functional Components

A **functional component** is a JavaScript function that returns JSX.

- Always name React functional components with **Capital Letters** to distinguish them from regular functions.

Example of a functional component:

```js
function HeadingComponent() {
  return <h1 className="heading">Hello from Function Component!</h1>;
}
```

Arrow function components:

```js
const Heading2 = () => {
  return <h1 className="heading">Hello from Arrow Function Component 2!</h1>;
};

const MyTitle = () => <h1 className="heading">Hello from MyTitle Function!</h1>;
```

### Rendering Functional Components

To render a functional component, use:

```js
root.render(<MyHeading />);
```

or

```js
<MyHeading></MyHeading>
```

### Component Composition: Using Components Inside Other Components

Example of component composition:

```js
const MyHeading = () => (
  <div>
    <h1 className="heading">Hello from React Function Component!</h1>
    <MyTitle /> {/* we can use functional component inside JSX */}
    <MyTitle></MyTitle>
  </div>
);
```

You can also include JavaScript expressions inside JSX:

```js
const MyHeading2 = () => {
  return (
    <div>
      <h1 className="heading">Hello from React Function!</h1>
      {jsxHeading} {/* Using JS variable inside JSX */}
      {console.log("object")} {/* Executing code inside JSX */}
      {MyTitle()} {/* Calling JS function inside JSX */}
    </div>
  );
};
```

React safely handles JavaScript within JSX and prevents malicious code execution.

**For runnable React js examples, see the [Example Code](../../examples/basics/3-jsx-and-functional-components).**

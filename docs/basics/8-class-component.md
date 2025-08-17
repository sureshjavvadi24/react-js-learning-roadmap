# React Class Components

## What is a Class Component?

A **Class Component** is a React component defined as a JavaScript class that extends `React.Component`. It must have a `render()` method that returns JSX to render UI.

---

## How to Write a Class Component

```js
import React from "react";

class UserClass extends React.Component {
  render() {
    return (
      <div className="user-card">
        <h1>Name: Suresh</h1>
      </div>
    );
  }
}

export default UserClass;
```

---

## Props in Class Components

To access props, use the constructor and call `super(props)`:

```js
constructor(props) {
super(props);
}
```

- `super(props)` allows the class to inherit React's internal features such as lifecycle methods, state management, and prop handling.
- Access props inside render using `this.props`:

```js
render() {
const { name } = this.props;
return (
<div className="user-card">
<h1>Name: {name}</h1>
</div>
);
}
```

---

## State in Class Components

State is stored in `this.state` which is an object holding all state variables.

### Creating State Variables

```js
constructor(props) {
super(props);
this.state = {
count: 0,
count2: 2
};
}
```

### Updating State

Never update state variables directly. Use `this.setState()` which updates only the specified parts of the state object:

```js
this.setState({
  count: this.state.count + 1,
});
```

---

## React Class Component Lifecycle

### Mounting Phase

1. **Constructor** runs first.
2. **render()** method is called.
3. **componentDidMount()** runs after the component is rendered to the DOM.

If the component has children:

- All children’s constructors and render phases run first.
- All children’s `componentDidMount()` lifecycle methods run.
- Finally, the parent’s `componentDidMount()` runs.

### Two Main Lifecycle Phases

- **Render Phase**:  
  React creates the virtual DOM and performs reconciliation. React batches constructors and render calls for all children first. This phase is very fast.

- **Commit Phase**:  
  React updates the actual DOM in batches and calls the `componentDidMount()` lifecycle hooks.

---

## Making API Calls in Class Components

Make the API call inside `componentDidMount()`:

```js
async componentDidMount() {
const data = await fetch("https://api.github.com/users/sureshjavvadi24");
const json = await data.json();
this.setState({
userInfo: json
});
}
```

This way, React renders the UI first, then updates with the API data.

---

## Updating Phase

If `setState()`, new props, or `forceUpdate()` is called, React triggers:

1. `render()` method
2. Commit changes to DOM
3. `componentDidUpdate(prevProps, prevState)`

Example usage of `componentDidUpdate` to conditionally react to state or prop changes:

```js
componentDidUpdate(prevProps, prevState) {
if (
this.state.userInfo !== prevState.userInfo ||
this.props.someProp !== prevProps.someProp
) {
// Write your update logic here
}
}
```

---

## Unmounting Phase

`componentWillUnmount()` is called right before the component is removed from the UI. Use this to clean up timers or subscriptions.

Example with interval timer cleanup:

```js
componentDidMount() {
this.timer = setInterval(() => console.log("Hi"), 1000);
}

componentWillUnmount() {
clearInterval(this.timer);
}
```

---

## Equivalent Cleanup in Functional Components using `useEffect`

In functional components, use the cleanup function returned from `useEffect()` to mimic `componentWillUnmount`:

```js
useEffect(() => {
  const timer = setInterval(() => console.log("Hello"), 1000);

  return () => {
    clearInterval(timer);
    console.log("Cleanup on unmount");
  };
}, []);
```

---

This structure provides a comprehensive overview of React class components, lifecycle, state management, and how it compares with hooks cleanup in functional components.

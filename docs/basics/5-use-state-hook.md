# React Hooks: `useState`

React Hooks are JavaScript functions provided by **React** that allow us to use **state** and **lifecycle features** in functional components.

---

## `useState()`

The `useState` hook is used to manage state variables in functional components.

### Importing `useState`

```js
import { useState } from "react";
```

### Creating a State Variable

const [varName, setVarName] = useState([]);

- **Initial value**: Pass the initial state inside `useState()`.  
  It can be:
  - `[]` → an array
  - `{}` → an object
  - `0` → number
  - `""` → string

### Updating the State Variable

```js
setVarName([]);
```

Here:

- `varName` → holds the state value
- `setVarName` → function used to update the state

---

## How Does `useState()` Update?

The crucial point is:

- Whenever the state variable updates → **React triggers a reconciliation cycle and re-renders the component**.
- As soon as the **data layer** changes, React updates the **UI layer**.
- The data layer and UI layer are always kept **in sync**.

---

## React Reconciliation (Diffing Algorithm)

To achieve efficient updates, React uses a **reconciliation algorithm**, also known as the **diffing algorithm** or **React Fiber**.

- When you create elements in React, you're creating **virtual objects**.
- These **Virtual DOM objects** are synced with the real DOM → this process is called **Reconciliation**.
- On every rendering cycle:
  - React compares the **updated Virtual DOM** (new UI blueprint) with the **previous Virtual DOM** (old UI).
  - Then, it makes **precise changes** to the **actual DOM**.

---

## React Fiber

React Fiber is the new reconciliation engine in React that enables:

- Incremental rendering
- Task prioritization
- Optimized updates

📖 Take a look at the [React Fiber Architecture repository](https://github.com/acdlite/react-fiber-architecture).

# 🔄 Redux & Redux Toolkit Notes

## 📌 What is Redux?

- **Redux**: A state management library for JavaScript apps
- It is a **separate library** → must install before using.
- Useful for **managing the Data Layer** of the app.
- Offers **easy debugging** with Redux DevTools.

---

## 📦 Redux Libraries

1. **React Redux**

   - Acts as a **bridge** between React and Redux.

2. **Redux Toolkit (RTK)**
   - Newer way of writing Redux.
   - Solves common problems in traditional Redux:
     - Store configuration is too complicated.
     - Requires multiple packages to make it useful.
     - Involves too much boilerplate code.
   - RTK provides:
     - Store management
     - Slices
     - Simpler reducer logic
     - Built-in immutability handling (via `immer`)

---

## 🏪 Store & Slices

### Redux Store

- A **big central object** that stores the state of the application.
- Any component can **read/write/update** via actions & reducers.

### Slices

- Small independent **slices** of the store, each handling one feature.
- We **cannot modify slices directly**.

Flow:

```
Button → dispatch(action) → reducer → updates slice → subscribed component auto-updates
```

---

## ⚙️ Setup Redux in React App

### Install

```js
npm install react-redux
npm install @reduxjs/toolkit
```

---

### Create a Store

```js
// src/Store/appStore.js
import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {},
});

export default appStore;
```

---

### Provide the Store to React App

```js
// App.js
import { Provider } from "react-redux";
import appStore from "./src/Store/appStore";

<Provider store={appStore}>
  <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
    <div className="app">
      <Header /> <Outlet />
    </div>
  </UserContext.Provider>
</Provider>;
```

Provider comes from react-redux.

Can wrap entire app or just part of it.

---

## Creating a Slice

```jsx
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
```

A slice requires 3 things:

- **name** → unique name for the slice.
- **initialState** → object holding default values.
- **reducers** → functions that update state.

Each reducer has access to:

- `state` → the slice state.
- `action` → object with `payload` carrying data.

Finally, we must export:

1. Dispatch actions → `addItem`, `removeItem`, `clearCart`.
2. Reducer → `cartSlice.reducer`.

---

## Adding the Slice to Store

```jsx
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Slices/cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
```

---

## Reading Data from Store (Subscribing)

```jsx
import { useSelector } from "react-redux";

const cartItems = useSelector((store) => store.cart.items);
console.log(cartItems);
```

- `useSelector` lets us pull data from the store.
- It automatically subscribes the component to updates.
- When slice state changes, the component re-renders.

---

## Dispatching an Action

```jsx
import { useDispatch } from "react-redux";
import { addItem } from "../Slices/cartSlice";

function CartButton() {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem("pizza"));
  };

  return (
    <button
      className="px-4 py-1 bg-white text-green-500 rounded-md cursor-pointer"
      onClick={handleAddItem}
    >
      ADD
    </button>
  );
}
```

---

## State Mutation Rules

In **Vanilla Redux**:

```jsx
addItem: (state, action) => {
  const newState = { ...state };
  newState.items.push(action.payload);
  return newState;
};
```

In **Redux Toolkit** (immer allows direct mutation):

```jsx
addItem: (state, action) => {
  state.items.push(action.payload); // works
};
```

Be careful:
clearCart: (state) => {
state = []; // ❌ incorrect, only reassigns local variable
}

Correct:

```jsx
clearCart: (state) => {
  state.items.length = 0; // ✅ mutating existing
  // OR
  return { items: [] }; // ✅ replacing with new object
};
```

---

## Debugging with Redux DevTools

- Add Redux DevTools extension in browser.
- It shows actions, state snapshots, and lets you time-travel debug.

---

## Redux Flow Recap

```
Component → dispatch(action) → reducer → updates slice → subscribed components auto-update → UI refresh
```

# React Concepts Overview

---

## React Layers

### 1. **UI Layer**

- This is basically the **JSX** part of React.
- It is displayed on the screen and updates according to the data layer.

### 2. **Data Layer**

- This is the most important part.
- **All UI changes are driven by the data layer.**
- If the data layer is well-controlled, the application will run smoothly.

---

## Higher Order Components (HOC)

- A **Higher Order Component** is a function that **takes a component as input and returns an enhanced component**.
- It does **not** modify the original component directly.
- All existing props must be passed down to maintain functionality.

### Example:

```jsx
export const withPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-black text-white absolute p-1 m-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
```

---

## Controlled and Uncontrolled Components

### **Uncontrolled Component**

- An **independent component** where all control is within the component itself.

```jsx
<div
  className="m-2 p-2 shadow-lg w-6/12 mx-auto"
  onClick={() => setShowItem(!showItem)}
>
  <div className="flex justify-between cursor-pointer">
    <span className="font-semibold">
      {resCategory.title}({resCategory?.itemCards.length})
    </span>

    <span>⬇️</span>
  </div>

  {showItem && <ItemList items={resCategory?.itemCards} />}
</div>
```

### **Controlled Component**

- The state/control of the component is managed by its **parent component**.
- Achieved through **lifting state up**.

### Example: Accordion (Controlled Component)

```jsx
resInfoCategory.map((cat, index) => (
  <RestaurantCategory
    key={cat.card.card.title}
    resCategory={cat.card.card}
    showItem={showItem === index ? true : false}
    setShowItem={() => setShowItem(index)}
  />
));
```

Here, the state `showItem` is controlled by the **parent**, not the `RestaurantCategory`.

👉 This pattern is called **Lifting State Up**.

---

## Props Drilling in React

- React follows a **one-way data flow** (parent → child).
- Sometimes, props need to be passed **step by step** even if intermediate components do not use them.  
  → This is called **Props Drilling**.

### Problem:

- Unnecessary passing of props to intermediate components.

### Solution:

- Use **React Context**.
- Other solutions: Redux, Zustand, Jotai, etc.

---

## React Context

- A **global space** to share data across the app without props drilling.

### Step 1: Create Context

```jsx
import { createContext } from "react";

export const UserContext = createContext({
  loggedInUser: "Default user",
});
```

---

### Step 2: Read Context

#### Using `useContext` (Hooks)

```jsx
import { useContext } from "react";
import { UserContext } from "./UserContext";

const { loggedInUser } = useContext(UserContext);
console.log(loggedInUser);
```

#### Using `Consumer` (Class Components or older way)

```jsx
<UserContext.Consumer>
  {({ loggedInUser }) => <h3 className="font-bold">User: {loggedInUser}</h3>}
</UserContext.Consumer>
```

---

### Step 3: Write/Update Context (with Provider)

```jsx
<UserContext.Provider value={{ loggedInUser: userName }}>
  <div className="app">
    {" "}
    <Header /> <Outlet />{" "}
  </div>{" "}
</UserContext.Provider>
```

#### The provided value is available only to the components wrapped inside Provider.

Example:

```jsx
<div className="app">
  <UserContext.Provider value={{ loggedInUser: userName }}>
    <Header />
  </UserContext.Provider>
  <Outlet /> {/* here context values are not available */}
</div>
```

### Step 4: Multiple Context Providers / Nested

```jsx
<UserContext.Provider value={{ loggedInUser: userName }}>
  <div className="app">
    <UserContext.Provider value={{ loggedInUser: "Surya" }}>
      <Header /> {/* Here, value = "Surya" */}
    </UserContext.Provider>
    <Header /> {/* Here, value = userName */}
    <Outlet />
  </div>
</UserContext.Provider>
```

### Context values are scoped → inner providers override outer ones.

### Step 5: Using Functions in Context

You can also pass functions inside Provider to update context values globally.

```jsx
<UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
  <div className="app">
    <Header />
    <Outlet />
  </div>
</UserContext.Provider>
```

#### Then inside a child component:

```jsx
const { loggedInUser, setUserName } = useContext(UserContext);

return (
  <div>
    <label>User Name: </label>
    <input
      type="text"
      className="border"
      value={loggedInUser}
      onChange={(e) => setUserName(e.target.value)}
    />
    <p>{loggedInUser}</p>
  </div>
);
```

#### ✅ Now when you update the input field, loggedInUser updates across the app.

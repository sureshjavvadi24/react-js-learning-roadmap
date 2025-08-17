# Optimizing Your React App: Principles and Code Examples

To **optimize your app** for scalability and performance, follow these key approaches:

## 1. Single Responsibility Principle

- **Each component should do one thing only.**
- Break large components into smaller, focused ones.
- This makes components **reusable, maintainable, and testable**.

### Example:

```js
// Button.jsx
const Button = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

export default Button;
```

## 2. Modular Architecture

- Organize code into folders for components, hooks, and utilities.
- **Small, well-defined components** are easy to reuse and update.

### Example Folder Structure:

```js
src / Components / Button.jsx;
Navbar.jsx;
About.jsx;
Hooks / useOnlineStatus.js;
useFetchData.js;
```

## 3. Custom Hooks

- Move reusable logic into custom hooks.
- Name custom hooks starting with **"use"** for clarity.
- Import hooks into any component and share code easily.

### Example Custom Hook:

```js
import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => setOnlineStatus(false));
    window.addEventListener("online", () => setOnlineStatus(true));
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;
```

Use in a component:

```js
import useOnlineStatus from "../Hooks/useOnlineStatus";

const StatusIndicator = () => {
  const online = useOnlineStatus();
  return <div>{online ? "Online" : "Offline"}</div>;
};
```

## 4. Code Splitting and Lazy Loading

- Use React's `lazy()` and `Suspense` for dynamic imports.
- Only load components when needed, reducing bundle size.
- Improves **load speed** and **performance**.

### Example:

```js
import { lazy, Suspense } from "react";

const About = lazy(() => import("./src/Components/About"));

const AppRoutes = [
  {
    path: "/about",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    ),
  },
];
```

- `Suspense` shows a fallback UI ("Loading...") while `About` loads.

## 5. Dynamic Bundling & Chunking

- **Dynamic import** creates separate JS bundles for components.
- The browser fetches only the needed code, removing unneeded components from the main bundle.

### Example:

When navigating to `/about`, only the code for `About.jsx` is loaded.

---

## Summary Table

| Principle/Technique   | Benefit               | Example                     |
| --------------------- | --------------------- | --------------------------- |
| Single Responsibility | Reusable, testable    | Small Button component      |
| Modular Style         | Easy maintenance      | `src/Components/Button.jsx` |
| Custom Hooks          | Shared logic          | `useOnlineStatus`           |
| Lazy Loading/Suspense | Faster load, chunking | `lazy(() => import(...))`   |

---

By designing your React app with **small components, custom hooks, and dynamic code splitting**, you achieve the goals of **reusability, maintainability, and testability**. This ensures a robust, high-performance application.

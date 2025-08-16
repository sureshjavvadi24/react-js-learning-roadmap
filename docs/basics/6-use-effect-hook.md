# Monolithic and Microservices Architectures

---

## Monolithic Architecture

A **Monolithic Architecture** involves building large projects where everything is bundled together into a single massive application codebase and deployment pipeline. This means the entire application—APIs, user interface, database connections, authentication, notification services, etc.—resides in one project.

### Problems with Monolithic Architecture

- **Size and Complexity Limitation:** Apps become too large and complex to fully understand.
- **Slow Startup:** Larger apps can slow down startup time.
- **Full Deployment Required:** Every update demands redeploying the entire app.
- **Limited Change Understanding:** Hard to predict the full impact of changes, leading to extensive manual testing.
- **Difficult Continuous Deployment:** Continuous deployment can be challenging to implement.
- **Scaling Challenges:** Different modules may have conflicting resource needs, complicating scaling.
- **Reliability Concerns:** Bugs in any module can crash the whole application, affecting availability.
- **Adoption of New Technologies:** Switching frameworks or languages is expensive and time-consuming as it impacts the whole application.

---

## Microservices Architecture

**Microservices Architecture** breaks the application into a set of smaller, interconnected services. Each service focuses on a specific job, like authentication or notification.

- Each service has its own business logic, rules, and can use different tools and technologies.
- Services communicate using REST APIs, messaging, or other protocols.
- Some services might have their own user interfaces or websites.

### Advantages of Microservices

- **Simpler Development** due to smaller, focused services.
- **Independent Teams** can work on different services simultaneously.
- **Flexibility in Technology**: Each service can use the best tools for its needs.
- **Independent Deployment** allows updating or replacing each component without affecting others.
- **Single Responsibility**: Each microservice handles one specific area, improving maintainability.

Breaking an app into microservices helps teams work faster and smarter, with less risk of breaking unrelated parts of the system.

---

# Rendering Components with Data: Two Approaches

1. **Load and Render**  
   Make the API call as soon as the app loads, fetch all the data, then render the UI.

2. **Render First, Fetch Later**  
   Quickly render the UI on page load with placeholders (like shimmers), then fetch the data. Once data arrives, re-render to show the actual content.

> React typically follows the **2nd approach** for a better user experience.

---

# React Hook: `useEffect()`

`useEffect()` is a React Hook that helps you perform **side effects** in functional components.

### How to Use `useEffect()`

```js
import { useEffect } from "react";

useEffect(() => {
  // Callback function runs after rendering
}, []);
```

- Takes two arguments: a **callback function** and a **dependency array**.
- The callback runs after the component has been rendered (render cycle completed).
- Use it to perform actions like API calls, achieving the "render first, fetch later" approach.

### Example: Fetch Data Inside `useEffect`

```js
useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  const data = await fetch(API_URL);
  const json = await data.json();
  console.log(json);
  // Update state with fetched data to trigger re-render
};
```

### Dependency Array Behavior

- `[]` — callback runs **only once** after the first render.
- Omitted — callback runs **after every render**.
- `[someValue]` — callback triggers **whenever `someValue` changes**.

```js
useEffect(() => {
  console.log("Callback called");
}, []);

useEffect(() => {
  console.log("Callback called");
}); // Runs on every render

useEffect(() => {
  console.log("Callback called");
}, [someValue]); // Runs when someValue changes
```

---

# CORS Error

- **CORS (Cross-Origin Resource Sharing)** is a browser security feature restricting web pages from accessing resources from different domains unless explicitly allowed.
- This can cause errors when your frontend tries to access APIs served from a different origin (domain/port).
- **Solutions:**
  - Use a browser CORS extension.
  - Use CORS proxy URLs in your API requests to bypass this restriction.

---

# Shimmer UI (Loading Placeholders)

When fetching data, there might be a delay before content appears, causing a poor user experience.

### To improve UX:

- Show a **loading indicator** or **shimmer UI** while data loads.
- Use **conditional rendering** to display a placeholder during loading.

### Example:

```js
if (listOfRestaurant.length === 0) {
  return <h1>loading...</h1>;
}

// Or using ternary operator
return listOfRestaurant.length === 0 ? (
  <Shimmer />
) : (
  <div className="container body"> {/* Render actual content here */} </div>
);
```

This approach shows a visual placeholder that’s replaced by real data once available.

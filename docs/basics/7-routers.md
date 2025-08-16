# React Router Overview

## Installation

To install React Router DOM, use:

```js
npm i react-router-dom
```

---

## Creating Routing Configuration

- Use `createBrowserRouter` from `react-router` to create the routing configuration.
- The configuration is a list of objects that tells what should happen on specific paths.

Example:

```js
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
```

- Pass this configuration to `RouterProvider` to render the routes in your app.

Example:

```js
root.render(<RouterProvider router={appRouter} />);
```

---

## Handling Errors

- Use `errorElement` in configuration to show a customized error component when an error occurs.

Example:

```js
{
path: "/",
element: <AppLayout />,
errorElement: <Error />,
}
```

- Use the hook `useRouteError` from `"react-router"` to get more information about the router error.

Example:

```js
import { useRouteError } from "react-router";

const err = useRouteError();
console.log(err);
```

---

## Nested Routes / Children Routes

- To create a default layout (e.g., with a `Header` on every page), use the `children` key.
- Children routes are specified as an array of route objects inside the parent route.

Example:

```js
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);
```

- Use the keyword `Outlet` from `react-router` inside your layout to render the matched child route.

Example `AppLayout`:

```js
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
```

---

## Navigation

- Use `<Link>` from `react-router` instead of anchor (`<a>`) tags to navigate.
- `<Link to="/path">Contact</Link>` changes components without reloading the entire page.
- This enables Single Page Application (SPA) behavior, avoiding full page reloads and making client-side routing smooth.

---

## Types of Routing in Web Apps

- **Client Side Routing:** Changes components and UI without network calls to load pages.
- **Server Side Routing:** Makes network calls to fetch the page and then renders it.

---

## Dynamic Routing

- Use parameters in path using `:` prefix to define dynamic parts.

Example:

```js
{
path: "/restaurant/:resId",
element: <CompName />,
},
```

- Use the `useParams` hook from `react-router` to get the dynamic parts of the URL.

Example:

```js
import { useParams } from "react-router-dom";

const { resId } = useParams();
```

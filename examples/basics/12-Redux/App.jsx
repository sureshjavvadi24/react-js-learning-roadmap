import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";
import RestaurantInfo from "./src/Components/RestaurantInfo";
import { UserContext } from "./src/utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./src/Redux/appStore";
import Cart from "./src/Components/Cart";

const About = lazy(() => import("./src/Components/About"));
const Grocery = lazy(() => import("./src/Components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    setUserName("Suresh Javvadi");
  }, []);

  // setUserName("Suresh Javvadi");

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header /> <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

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
        element: (
          <Suspense fallback={"Loading..."}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback="loading...">
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantInfo />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

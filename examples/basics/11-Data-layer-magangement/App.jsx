import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./src/Components/Contact";
import Error from "./src/Components/Error";
import RestaurantInfo from "./src/Components/RestaurantInfo";
import { UserContext } from "./src/utils/UserContext";

const About = lazy(() => import("./src/Components/About"));
const Grocery = lazy(() => import("./src/Components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    setUserName("Suresh Javvadi");
  }, []);

  // setUserName("Suresh Javvadi");

  return (
    // here default value
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      {/* here Suresh Javvadi  */}
      <div className="app">
        {/* <UserContext.Provider value={{ loggedInUser: userName }}>
          <Header />{" "}
        </UserContext.Provider> */}
        <UserContext.Provider value={{ loggedInUser: "Surya" }}>
          {/* here Surya  */}
          <Header />{" "}
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
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

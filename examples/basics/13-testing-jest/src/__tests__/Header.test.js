import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Components/Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import appStore from "../Redux/appStore";
import "@testing-library/jest-dom";

test("should render Header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginBtn = screen.getByRole("button");

  const loginBtn = screen.getByRole("button", { name: "Login" });

  expect(loginBtn).toBeInTheDocument();
});

it("should render Header component with cart items 0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText("Cart (0)");
  expect(cart).toBeInTheDocument();
});

it("should render Header component with cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // it will take regex also
  const cart = screen.getByText(/Cart/);

  expect(cart).toBeInTheDocument();
});

test("should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginBtn = screen.getByRole("button", { name: "Login" });
  // fireEvent is for events
  fireEvent.click(loginBtn);
  const logoutBtn = screen.getByRole("button", { name: "logout" });

  expect(logoutBtn).toBeInTheDocument();
});

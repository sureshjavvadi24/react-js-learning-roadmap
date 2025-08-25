import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../Redux/appStore";
import "@testing-library/jest-dom";
import RestaurantInfo from "../Components/RestaurantInfo";
import RES_INFO from "../mocks/resInfo.json";
import { act } from "react";
import Header from "../Components/Header";
import { BrowserRouter } from "react-router";
import Cart from "../Components/Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(RES_INFO) })
);

it("should render Restaurant info component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantInfo />
      </Provider>
    )
  );

  const accHeading = screen.getByText("Recommended(20)");

  const foodItems = screen.getAllByTestId("foodItems");

  expect(foodItems.length).toBe(20);

  expect(accHeading).toBeInTheDocument();
});

it("should render add buttons and cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantInfo />
        </Provider>
      </BrowserRouter>
    )
  );
  const addBtn = screen.getAllByRole("button", { name: "ADD" });

  expect(addBtn.length).toBe(20);

  const cart = screen.getByText("Cart (0)");

  expect(cart).toBeInTheDocument();
});

it("should update the cart number in the header when click on add button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantInfo />
        </Provider>
      </BrowserRouter>
    )
  );

  const addBtn = screen.getAllByRole("button", { name: "ADD" });

  fireEvent.click(addBtn[0]);
  const cart = screen.getByText("Cart (1)");
  expect(cart).toBeInTheDocument();

  fireEvent.click(addBtn[2]);
  const cart2 = screen.getByText("Cart (2)");

  expect(cart2).toBeInTheDocument();
});

it("should update the cart items when click on add button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantInfo />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const cart = screen.getAllByTestId("foodItems");
  expect(cart.length).toBe(22);

  fireEvent.click(screen.getByRole("button", { name: "Clear cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(20);

  const emptyCart = screen.getByText("Add items to the cart");

  expect(emptyCart).toBeInTheDocument();
});

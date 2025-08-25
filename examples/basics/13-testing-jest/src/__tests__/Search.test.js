import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Components/Body";
import MOCK_RES_LIST from "../mocks/resList.json";
import { act } from "react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router";
import { UserContext } from "../utils/UserContext";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_RES_LIST),
  });
});

it("should search  restaurant list for Biryani text in the input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <UserContext.Provider
          value={{ loggedInUser: "test", setUserName: jest.fn() }}
        >
          <Body />
        </UserContext.Provider>
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  const resCardsBefore = screen.getAllByTestId("resCard");

  expect(resCardsBefore.length).toBe(6);

  fireEvent.change(searchInput, { target: { value: "Biryani" } });

  fireEvent.click(searchBtn);

  const resCards = screen.getAllByTestId("resCard");

  expect(resCards.length).toBe(2);

  expect(searchBtn).toBeInTheDocument();
});

it("should should filter to top rated restaurant on click", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <UserContext.Provider
          value={{ loggedInUser: "test", setUserName: jest.fn() }}
        >
          <Body />
        </UserContext.Provider>
      </BrowserRouter>
    )
  );

  const filterBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(filterBtn);

  const resCards = screen.getAllByTestId("resCard");

  expect(resCards.length).toBe(3);

  expect(filterBtn).toBeInTheDocument();
});

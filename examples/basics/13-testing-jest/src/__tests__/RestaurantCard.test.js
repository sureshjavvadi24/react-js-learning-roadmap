import { render, screen } from "@testing-library/react";
import RestaurantCard from "../Components/RestaurantCard";
import RES_MOCK_DATA from "../mocks/resCard.json";
import "@testing-library/jest-dom";
import withPromoted from "../Components/RestaurantCard";

test("should render Restaurant component with props data", () => {
  render(<RestaurantCard resData={RES_MOCK_DATA} />);

  const name = screen.getByText("Shah Ghouse Hotel & Restaurant");

  expect(name).toBeInTheDocument();
});

// test("should render Restaurant component with promoted label", () => {
//   const ResCardWithPromoted = withPromoted(RestaurantCard);

//   render(<ResCardWithPromoted resData={RES_MOCK_DATA} />);

//   const promotedLabel = screen.getByText("Promoted");
//   expect(promotedLabel).toBeInTheDocument();
// });

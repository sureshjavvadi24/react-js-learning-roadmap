import { render, screen } from "@testing-library/react";
import Contact from "../Components/Contact";
import "@testing-library/jest-dom";

test("Should load Contact page ", () => {
  render(<Contact />);

  // Querying
  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Should load button in Contact page", () => {
  render(<Contact />);
  // get by checks  element status
  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("Should load input name in Contact page", () => {
  render(<Contact />);

  const input = screen.getByPlaceholderText("Name");

  expect(input).toBeInTheDocument();
});

test("should load input boxes in Contact page", () => {
  render(<Contact />);

  const inputBoxes = screen.getAllByRole("textbox");

  // console.log(inputBoxes[0]);

  // gives the array
  expect(inputBoxes);

  // exact inputs
  expect(inputBoxes.length).toBe(2);
});

// describe("Contact page", () => {
//   beforeAll(() => {
//     console.log("Before all the test cases");
//   });

//   beforeEach(() => {
//     console.log("Before each test case");
//   });

//   afterAll(() => {
//     console.log("After each test case");
//   });

//   afterEach(() => {
//     console.log("After each test cases");
//   });

//   test("should load submit button in Contact page", () => {
//     render(<Contact />);

//     const submitBtn = screen.getByText("Submit");

//     // gives the array
//     expect(submitBtn);

//     // exact inputs
//     expect(submitBtn).toBeInTheDocument();
//   });

//   test("should load only 2 input boxes in Contact page", () => {
//     render(<Contact />);

//     const inputBoxes = screen.getAllByRole("textbox");

//     // console.log(inputBoxes[0]);

//     // gives the array
//     expect(inputBoxes);

//     // exact inputs
//     expect(inputBoxes.length).not.toBeGreaterThan(2);
//   });
// });

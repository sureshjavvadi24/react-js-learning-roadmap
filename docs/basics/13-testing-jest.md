# Testing in React Development

Testing is very important in web development because even a small code change can affect the app. Testing is a separate domain, but developers are responsible for some parts of testing.

---

## Types of Testing Developers Can Do

### 1. Unit Testing

- Tests a React component in **isolation**, not the whole app.
- Focuses on verifying the individual component's functionality.

### 2. Integration Testing

- Tests how multiple components work together.
- Checks if combined features and component flows work as expected.

### 3. End to End Testing (E2E)

- Tests the entire application flow from page landing to leaving the page.
- Covers workflows: login, features, logout, etc.
- Requires specialized tools like Cypress, Selenium, etc.

**Developers mainly focus on Unit and Integration testing.**

---

## Setting Up Testing Environment

### Libraries Used

- **React Testing Library:** Standard library to write test cases for React components; builds on DOM Testing Library.
- **Jest:** JavaScript library for writing tests, used behind the scenes by React Testing Library.
- **Babel:** Needed to transform JSX in test files.

### Installing Dependencies

```js
npm i -D @testing-library/react @testing-library/dom
npm i -D jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

### Babel Configuration

- Create `babel.config.js` for Babel setup targeting your Node version.
- If using Parcel, disable default Babel transpilation via `.parcelrc`:

```js
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
```

---

## Running Tests

- Add test script in `package.json`:

```js
"scripts": {
"start": "parcel index.html",
"build": "parcel build index.html",
"test": "jest"
}
```

- Configure Jest:

```
npx create-jest
```

- Jest uses **jsdom** (a browser-like environment) to run tests.

- Install `jest-environment-jsdom` explicitly (for Jest v28+):

```js
npm install --save-dev jest-environment-jsdom
```

---

## Writing Test Cases

### File Naming Conventions

- Place test files in:
  - `__tests__` folders
  - Files named `*.test.js`, `*.spec.js`, or TypeScript variants

### Basic Test Syntax

```js
test("description", () => {
  // test implementation
});
```

### Example Unit Test

```js
import { sum } from "../Components/sum";

test("The sum function should calculate sum of two numbers", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
```

---

## Using JSX in Tests

- Install JSX preset:

```js
npm i @babel/preset-react
```

- Add to `babel.config.js`:

```js
["@babel/preset-react", { runtime: "automatic" }],
```

---

## DOM Testing with React Testing Library

- Install Jest DOM helpers:

```js
npm i @testing-library/jest-dom
```

- Example test with React Testing Library:

```js
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../Components/Contact";

test("Should load Contact page", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
```

---

## Grouping Tests

Use `describe` blocks to group related tests:

```js
describe("Contact page", () => {
  beforeAll(() => {
    console.log("Before all test cases");
  });

  beforeEach(() => {
    console.log("Before each test case");
  });

  afterAll(() => {
    console.log("After all test cases");
  });

  afterEach(() => {
    console.log("After each test case");
  });

  test("Sample test", () => {
    // test code
  });
});
```

Alias names:

- `it()` is same as `test()`.

---

## Wrappers for Providers in Tests

If your app uses Redux or React Router, wrap your components with required providers in tests:

```js
render(
  <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
  </BrowserRouter>
);
```

---

## TextEncoder Polyfill for Jest

Create `jest.setup.js`:

```js
const { TextEncoder, TextDecoder } = require("util");

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
```

Add to `jest.config.js`:

```js
setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
```

---

## Event Simulation

Using React Testing Library’s `fireEvent`:

```js
const loginBtn = screen.getByRole("button", { name: "Login" });
fireEvent.click(loginBtn);
const logoutBtn = screen.getByRole("button", { name: "Logout" });
expect(logoutBtn).toBeInTheDocument();
```

---

## Integration Testing & Fetch Mocking

jsdom does not support `fetch` by default — mock it like this:

```js
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_RES_LIST),
  })
);
```

- `jest.fn()` creates a mock function.
- Mock simulates browser `fetch` behavior, returning promises.

---

## Continuous Test Running

Run Jest in watch mode to continuously run tests on code changes:

```js
npx jest --watch
```

Add to scripts for convenience.

---

## Async Testing and `act()`

For async actions, wrap renders in `act()`:

```js
import { act } from "@testing-library/react";

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
```

- Make test callbacks `async` when using `await`.

---

## Using `data-testid` for Queries

Add `data-testid` to elements for easy querying:

```js
<input data-testid="searchInput" />;

const input = screen.getByTestId("searchInput");
```

# Handling onChange Event and Rendering Multiple Components in Tests

## Simulating onChange Event with React Testing Library

When testing form elements or inputs for user interaction, the `fireEvent.change` method is used to simulate an `onChange` event.

```js
fireEvent.change(element, { target: { value: "value" } });
```

- `{}`: Represents the **event object**.
- `target {}`: Represents the **target element** of the event.
- `value`: The new **value of the input**.

This simulates a browser `change` event where the input’s value changes.

---

## Rendering Multiple Components with Required Providers

When components depend on context providers like React Router’s `BrowserRouter` or state management like Redux providers or React contexts, wrap them accordingly in your test render.

Example test case wrapping multiple components and contexts:

```js
it("should search restaurant list for Biryani text in the input", async () => {
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
});
```

- Use `await act(async () => ...)` to ensure updates related to async operations and effects are processed before assertions.
- Wrap all necessary providers to mimic the real app environment for the component.

---

This approach helps simulate realistic user interactions and ensures components have the required context and routing environment during testing.

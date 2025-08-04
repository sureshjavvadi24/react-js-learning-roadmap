import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { className: "heading" },
  "Hello World from React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log(heading);

// other way to create element

const jsxHeading = <h1 className="heading">Hello World from JSX!</h1>;
root.render(jsxHeading); // both are same

console.log(jsxHeading);

const jsxParagraph = // to write mutiple lines warap it in ()
  (
    <p className="paragraph">
      This is a paragraph created using JSX syntax in React.
    </p>
  );
root.render(jsxParagraph);

// function component

function HeadingComponent() {
  return <h1 className="heading">Hello from Function Component!</h1>;
}

const Heading2 = () => {
  return <h1 className="heading">Hello from Arrow Function Component 2!</h1>;
};

const MyTitle = () => <h1 className="heading">Hello from MyTitle Function!</h1>;

const MyHeading = () => (
  <div>
    <h1 className="heading">Hello from React Function Component!</h1>
    <MyTitle /> {/* we can use functional component inside JSX */}{" "}
    <MyTitle></MyTitle>
  </div>
);

root.render(<MyHeading />); // to render the component
root.render(<MyHeading></MyHeading>); //

// use JS inside JSX

const MyHeading2 = () => {
  return (
    <div>
      <h1 className="heading">Hello from React Function!</h1>
      {jsxHeading} // we can use js inside JSX
      {console.log("object")}
      {MyTitle()}
      <HeadingComponent /> // we can use functional component inside JSX
    </div>
  );
};

const number = 10000;
const HeadingComponent4 = () => (
  <div id="containter">
    {number}
    <h1>Namaste React</h1>
  </div>
);

root.render(<MyHeading2 />);

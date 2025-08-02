const heading = React.createElement("h1", { id: "heading" }, "Hello world!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

console.log(heading); // react object

// create nested elements

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am an h1 tag")
  )
);

root.render(parent);

const parent2 = React.createElement(
  "div",
  { id: "parent2" },
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
    React.createElement("h3", {}, "I am an h3 tag"),
  ])
);

root.render(parent2);

const parent3 = React.createElement(
  "div",
  { id: "parent3" },
  React.createElement("div", { id: "child3" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
    React.createElement("h3", {}, "I am an h3 tag"),
  ]),
  React.createElement("div", { id: "child32" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
    React.createElement("h3", {}, "I am an h3 tag"),
  ])
);

root.render(parent3);

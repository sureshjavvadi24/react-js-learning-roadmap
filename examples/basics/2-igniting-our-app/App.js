import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

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

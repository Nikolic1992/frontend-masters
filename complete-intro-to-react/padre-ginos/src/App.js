import React from "react";
import { createRoot } from "react-dom/client";

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "Pizza 1",
      description: "Pizza 1 description",
    }),
    React.createElement(Pizza, {
      name: "Pizza 2",
      description: "Pizza 2 description",
    }),
    React.createElement(Pizza, {
      name: "Pizza 3",
      description: "Pizza 3 description",
    }),
    React.createElement(Pizza, {
      name: "Pizza 4",
      description: "Pizza 4 description",
    }),
    React.createElement(Pizza, {
      name: "Pizza 5",
      description: "Pizza 5 description",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));

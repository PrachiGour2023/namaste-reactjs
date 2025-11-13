import React from "react";
import ReactDOM from "react-dom/client";

// core react element code which converts into js object
// React.createElement -> js object -> HTML element(render)
const heading = React.createElement(
  "div",
  {
    id: "division",
  },
  [
    React.createElement(
      "h1",
      {},
      React.createElement(
        "div",
        {
          id: "nested",
        },
        "this is nested div"
      )
    ),
    React.createElement("span", { id: "span" }, "this is span"),
  ]
);

// jsx syntex (Easy understanding for developers)
// JSX -> React.createElement -> js object -> HTML element(render)
const para = <p className="content">jsx in namaste react</p>;
console.log(para);

// it will print javascript object
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(para);

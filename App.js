const heading = React.createElement(
  "div",
  {
    id: "division",
  },
  [
    React.createElement("h1", {}, React.createElement("div", {
        id: 'nested'
    } , "this is nested div")),
    React.createElement("span", { id: "span" }, "this is span"),
  ]
);

// it will print javascript object
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

import React from "react";
import ReactDOM from "react-dom/client";

/*
Functional Component (new -> arrow function)
Class Component (old -> class structure)
*/

// react element (jsx)
const heading = <div>React Element</div>;

// react components
const HomeComponent = () => <div>Home Component</div>;
const AboutComponent = () => <div>About Component</div>;

// react component with return
const TitleComponent = () => {
  return (
    <div>
      {heading}
      {/* Component Composition */}
      {HomeComponent()}
      <AboutComponent />
      <p>Functional Component that return a piece of jsx code 🚀</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TitleComponent />);
// root.render(heading);

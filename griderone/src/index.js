import React from "react";
import ReactDOM from "react-dom";

// a function component
const App = function() {
  return (
    <div>
      <h1>This is my cool function-Component</h1>
      <p>And som text to show under the header</p>
      <p>Lorem ipsum baby</p>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

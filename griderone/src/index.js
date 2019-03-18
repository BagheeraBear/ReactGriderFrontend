import React from "react";
import ReactDOM from "react-dom";

// a function component
// HTML > JSX Excercise
const App = function() {
  const buttonText = "Click me!";
  const labelText = "Enter name: ";
  const style = { backgroundColor: "blue", color: "white" };
  return (
    <div>
      <h1>This is my cool function-Component</h1>
      <p>And som text to show under the header</p>
      <p>Lorem ipsum baby</p>
      <label class="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={style}>{buttonText}</button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

// Next: Props
// Classbased Components
// State
// Lifecycle
// Forms and Events
// API
// Redux
// React Router
// Authentication
// RESP API App

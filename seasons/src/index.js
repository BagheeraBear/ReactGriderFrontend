import React from "react";
import ReactDOM from "react-dom";

// into classBased prototypal inheritance

class App extends React.Component {
  // constructor, first called instantly before anything else
  // super - a reference to the parents contructor-function
  constructor(props) {
    super(props);
    // only time we make a direct assignment!
    this.state = { latitude: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // we called setState!!
        this.setState({ latitude: position.coords.latitude });
      },
      error => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  // React says we have to define render()
  render() {
    // update state > immediate re-render

    // Conditional Rendering, 3 scenarios

    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return <div>Latitude: {this.state.latitude}</div>;
    }

    return <div>Loading...!</div>;
  }
}

// React.Component has methods

// State

ReactDOM.render(<App />, document.querySelector("#root"));

/* functional
const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    error => console.log(error)
  );

  return <div>Hi there</div>;
};
*/

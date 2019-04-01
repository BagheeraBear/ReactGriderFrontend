import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// into classBased prototypal inheritance

class App extends React.Component {
  // constructor, first called instantly before anything else
  // super - a reference to the parents contructor-function
  // only time we make a direct assignment!
  state = { latitude: null, errorMessage: "" };

  componentDidMount() {
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

  // componentDidUpdate(){
  //   console.log('My component was updated - it re-rendered');
  // }
  renderContent() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    }

    return <Spinner message="Please accept location request!" />;
  }
  // React says we have to define render()
  render() {
    return(
    <div className="border red">{this.renderContent()}</div>
    // update state > immediate re-render
    )
    // Conditional Rendering, 3 scenarios
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

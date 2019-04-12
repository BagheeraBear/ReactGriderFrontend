import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  // onFormSubmit = event => {
  //   event.preventDefault();
  //   /* ? vvvv ? : this.props.onSubmit() vvvvv */
  //   this.props.onSubmit(this.state.term);
  // };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault(); // no refresh on enter

    // TODO Make sure we call callback from parent component
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              /* onChange={e => this.setState({ term: e.target.value })} */
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      term: event.target.value
    });
    this.props.searchFunction(event.target.value)
  }



  render() {
    return (
      <input
      value={this.state.term}
      type="text"
      className="form-search form-control"
      onChange={this.handleChange}/>
    );
  }
}

export default SearchBar;

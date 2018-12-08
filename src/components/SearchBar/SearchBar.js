import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    sort: 'date'
  };

  onSortChange(event) {
    this.props.onSortChange(event.target.value);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          id="search-input"
          type="text"
          onChange={event => this.props.onSearchTextChange(event.target.value)}
          placeholder="Search..."
        />
        <span>sort:</span>
        <input id="title-input" type="radio" name="sort-group" value="title" onChange={event => this.onSortChange(event)}/>
        <label htmlFor="title-input">Title</label>,
        <input id="date-input" type="radio" name="sort-group" value="date" onChange={event => this.onSortChange(event)}/>
        <label htmlFor="date-input">Date</label>
      </div>
    );
  }
}

export default SearchBar;

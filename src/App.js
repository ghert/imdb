import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar.js';
import FilmList from './components/FilmList/FilmList.js';

class App extends Component {
  state = {
    films: [],
  };

  fetchMovies(searchText) {
    fetch(`http://www.omdbapi.com/?apikey=e260c91c&s=${searchText}`)
      .then(res => res.json())
      .then(res => {
        if (res.Response && res.Search) {
          this.setState({ films: res.Search });
        } else {
          this.setState({ films: []})
        }
      }).catch(() => {
        this.setState({ films: []})
      });
  }

  sort(sortBy) {
    if (sortBy === 'date') {
      this.setState({films: this.state.films.sort((a, b) => {
        if (a.Year > b.Year) {
          return 1
        } else if (a.Year < b.Year) {
          return -1
        }
        return 0;
      })});
    } else {
      this.setState({films: this.state.films.sort((a, b) => {
        if (a.Title > b.Title) {
          return 1
        } else if (a.Title < b.Title) {
          return -1
        }
        return 0;
      })});
    }
  }

  render() {
    return (
      <div className="app">
        <h1>Film Search</h1>
        <SearchBar
          onSortChange={sortBy => this.sort(sortBy)}
          onSearchTextChange={text => this.fetchMovies(text)}
        />
        <FilmList films={this.state.films} />
      </div>
    );
  }
}

export default App;

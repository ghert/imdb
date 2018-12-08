import React, { Component } from 'react';
import './FilmList.css';

class Film extends Component {
  state = {
    detailsOpen: false
  };

  render() {
    return (
      <li onClick={() => this.setState({ detailsOpen: !this.state.detailsOpen })}>
        <p>{this.props.Title}</p>
        {this.state.detailsOpen && (
          <div>
            <p>
              Year: {this.props.Year} imdbID: {this.props.imdbID}
            </p>
            {this.props.Poster && <img src={this.props.Poster} alt={this.props.title} />}
          </div>
        )}
      </li>
    );
  }
}

class FilmList extends Component {
  render() {
    return (
      <ul className="film-list">
        {this.props.films.map(film => (
          <Film key={film.imdbID} {...film} />
        ))}
      </ul>
    );
  }
}

export default FilmList;

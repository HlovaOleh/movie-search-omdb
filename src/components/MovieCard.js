import React from 'react';
import { MovieControls } from './MovieControls';

export const MovieCard = ({ movie, type }) => (
  <div className="movie-card">
    <div className="overlay" />
    <img
      src={`${movie.Poster}`}
      alt={`${movie.Title} Poster`}
    />
    <div className="header">
      <h3 className="title">{movie.Title}</h3>
      <h4 className="release-date">{movie.Year}</h4>
    </div>
    <MovieControls type={type} movie={movie} />
  </div>
);

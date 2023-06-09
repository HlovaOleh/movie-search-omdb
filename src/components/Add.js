import React, { useState } from 'react';
import { ResultCard } from './ResultCard';

export const Add = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    setTimeout(() => {
      fetch(
        `${process.env.REACT_APP_OMDB_API_URL}?apiKey=${process.env.REACT_APP_OMDB_API_KEY}&page=1&s=${e.target.value}`,
      )
        .then((res) => res.json())
        .then((data) => {
          setResults(data.Search);
        });
    }, 3000);
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.imdbID}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

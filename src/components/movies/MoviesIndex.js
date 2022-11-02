// export default function MoviesIndex() {
//   return <p>Movie List</p>;
// }
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ErrorMessage from '../errors/ErrorMessage';
import MovieListing from './MovieListing';

// import './MoviesIndex.css';

import { getAllMovies } from '../../api/fetch';
export default function MoviesIndex() {
  const [err, setErr] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((response) => {
        setMovies(response);
        setErr(false);
      })
      .catch((error) => {
        console.log(error);
        setErr(true);
      });
  }, []);

  return (
    <div>
      {err ? (
        <ErrorMessage />
      ) : (
        <section className="shows-index-wrapper">
          <h2>All Movies</h2>
          <button>
            <Link to="/movies/new">Add a new Movie</Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search Movies:
            <input
              type="text"
              // value={searchTitle}
              id="searchTitle"
              // onChange={handleTextChange}
            />
          </label>
          <section className="movies-index">
            {/* <!-- MovieListing components --> */}
            {movies.map((movie) => {
              return <MovieListing movie={movie} key={movie.id} />;
            })}
          </section>
        </section>
      )}
    </div>
  );
}

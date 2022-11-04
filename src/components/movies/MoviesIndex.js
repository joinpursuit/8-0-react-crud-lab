import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "./MoviesListing";

import { getAllMovies } from "../../api/fetch";

function filterMovies(search, movies) {
  return movies.filter((movie) => {
    return movie.title.toLowerCase().match(search.toLowerCase());
  });
}

export default function MoviesIndex() {
  const [loadingError, setLoadingError] = useState();
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState();
  const [searchTitle, setSearchTitle] = useState("");

  /**
   * Saves text input for search in state
   * @param {str} e
   */
  function handleTextChange(e) {
    const title = e.target.value;
    const result = title.length ? filterMovies(title, allMovies) : allMovies;

    setSearchTitle(title);
    setMovies(result);
  }

  useEffect(() => {
    getAllMovies()
      .then((response) => {
        setMovies(response);
        setLoadingError(false);
      })
      .catch((error) => {
        console.log(error);
        setLoadingError(true);
      });
  }, []);

  return (
    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="movies-index-wrapper">
          <h2>All Movies</h2>
          <button>{/* <Link to="/movies/new">Add a new movie</Link> */}</button>
          <br />
          <label htmlFor="searchTitle">
            Search Movies:
            <input
              type="text"
              value={searchTitle}
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>
          <section className="movies-index">
            {movies.map((movie) => {
              return <MovieListing movie={movie} key={movie.id} />;
            })}
          </section>
        </section>
      )}
    </div>
  );
}

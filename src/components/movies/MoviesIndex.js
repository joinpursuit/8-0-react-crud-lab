import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ErrorMessage from "../errors/ErrorMessage";
import { getAllMovies } from "../../api/fetch";
import MovieListing from "./MovieListing";

import "../shows/ShowsIndex.css";
import "../errors/ErrorMessage.css";

export default function MoviesIndex() {
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(false);
  useEffect(() => {
    setLoading(true);
    getAllMovies()
      .then((response) => {
        console.log(response);
        setAllMovies(response);
        setMovies(response);
        setLoading(false);
        setLoadingError(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setLoadingError(true);
      });
  }, []);

  function filterMovies(search, movies) {
    return movies.filter((movie) => {
      return movie.title.toLowerCase().match(search.toLowerCase());
    });
  }

  function handleTextChange(event) {
    const title = event.target.value;
    const result = title.length ? filterMovies(title, allMovies) : allMovies;

    setSearchTitle(title);
    setMovies(result);
  }

  return (
    <div>
      {loading && (
        <section className="loading">
          <p>Loading...</p>
        </section>
      )}
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="shows-index-wrapper">
          <h2>All Movies</h2>
          <button>
            <Link to="/movies/new">Add a new movie</Link>
          </button>
          <br />
          <p>Total Movies: {movies.length}</p>
          <label htmlFor="searchTitle">
            Search Movies:
            <input
              type="text"
              value={searchTitle}
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
            {movies.map((movie) => (
              <MovieListing movie={movie} key={movie.id} />
            ))}
          </section>
        </section>
      )}
    </div>
  );
}

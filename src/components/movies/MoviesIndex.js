import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMovies } from "../../api/fetch";
import MovieListing from "./MovieListing";
import ErrorMessage from "../errors/ErrorMessage";


import "../shows/ShowsIndex.css";

export default function MoviesIndex() {
  const [loadindError, setLoadingError] = useState
  (false);
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [searchTitle, setSearchTitle]  = useState
  ("");

  useEffect(() => {
    getAllMovies()
    .then((response) => {
      setAllMovies(response);
      setMovies(response);
      setLoadingError(false)
    })
    .catch((error) => {
      setLoadingError(true);
    });
  }, []); // Empty dependencies array will cause useEffect

  function filterMovies(search, movies) {
    return movies.filter((movie) => {
      return movie.title.toLowerCase().match(search.toLowerCase());
    })
  }
  function handleTextChange(event) {
    const title = event.target.value;
    const result = title.length ? filterMovies(title, allMovies) : allMovies;

    setSearchTitle(title);
    setMovies(result);
  }

  return (
    <div>
      {loadindError ? (
        <ErrorMessage />
      ) : (
        <section className="shows-index-wrapper">
          <h2>All Movies</h2>
          <button>
            <Link to="/movies/new">Add a new movie</Link>
          </button>
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
          <section className="shows-index">
            {movies.map((movie) => {
              return <MovieListing movie={movie} key={movie.id} />
            })}
            {/* <!-- ShowListing components --> */}
          </section>
        </section>
      )}
    </div>
  );
}


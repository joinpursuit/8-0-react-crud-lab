import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllMovies } from "../../api/fetch";

import ErrorMessage from "../errors/ErrorMessage";
import MoviesListing from "./MoviesListing";

import "./MoviesIndex.css";

function filterMovies(search, movies) {
  return movies.filter((movie) =>
    movie.title.toLowerCase().match(search.toLowerCase())
  );
}

export default function MoviesIndex() {
  const [loadingError, setLoadingError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  function handleTextChange(e) {
    const title = e.target.value;
    const result = title.length ? filterMovies(title, allMovies) : allMovies;
    setSearchTitle(title);
    setMovies(result);
  }

  useEffect(() => {
    getAllMovies()
      .then((res) => {
        setAllMovies(res);
        setMovies(res);
        setLoadingError(false);
      })
      .catch((err) => {
        console.log(err);
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
          <section className="movies-index">
            {/* <!-- ShowListing components --> */}
            {movies.map((movie) => {
              return <MoviesListing movie={movie} key={movie.id} />;
            })}
          </section>
        </section>
      )}
    </div>
  );
}

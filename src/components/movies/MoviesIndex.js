import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "./MovieListing";

import "./MoviesIndex.css";
import { getAllMovies } from "../../api/fetch";

export default function MoviesIndex() {
  const [loadingError, setLoadingError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [allmovies, setAllMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  
  function handleTextChange(event) {
    const title = event.target.value;
    const result = title.length ? filterMovies(title, allmovies) : allmovies;
    setSearchTitle(title);
    setMovies(result);
  }
  function filterMovies(search, movies) {
    return movies.filter((movie) => {
      return movie.title.toLowerCase().match(search.toLowerCase());
    });
  }
  
  useEffect(() => {
    getAllMovies()
      .then((response) => {
        setMovies(response);
        setAllMovies(response);
        setLoadingError(false);
      })
      .catch((error) => {
        console.error(error);
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
              {movies.map((movie) => {
                return <MovieListing movie={movie} key={movie.id} />;
              })}
            </section>
          </section>
        )}
      </div>
    );
}

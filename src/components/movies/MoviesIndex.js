import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import MovieListing from "./MovieListing";
import ErrorMessage from "../errors/ErrorMessage";

import { getAll } from "../../api/fetch";

import "./MovieIndex.css";

export default function MoviesIndex() {
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [error, setError] = useState(true);

  useEffect(() => {
    getAll("movies")
      .then((res) => {
        setMovies(res);
        setAllMovies(res);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);

  const handleTextChange = (e) => {
    const searchVal = e.target.value;
    setSearchMovie(searchVal);
    const filteredMovies = allMovies.filter((movie) =>
      movie.title.toLowerCase().match(searchVal.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  return error ? (
    <div>
      <ErrorMessage />
    </div>
  ) : (
    <div id="movie-listing">
      <h2>All Movies</h2>
      <section className="movies-elements">
        {/* <p className="count">Movie count: <span>{movies.length}</span></p> */}
        <button>
          <Link to="/movies/new">add a new movie</Link>
        </button>
        {/* <br />
        <select>
          <option>Choose a sorting</option>
        </select> */}
        <label htmlFor="searchMovies">
          Search Movies:{" "}
          <input
            type="text"
            id="searchMovies"
            value={searchMovie}
            onChange={handleTextChange}
          />
        </label>
      </section>
      <section className="all-movies">
        {movies.map(({ id, title, description, listedIn, duration }) => {
          return (
            <MovieListing
              key={id}
              title={title}
              description={description}
              listedIn={listedIn}
              duration={duration}
              id={id}
            />
          );
        })}
      </section>
    </div>
  );
}

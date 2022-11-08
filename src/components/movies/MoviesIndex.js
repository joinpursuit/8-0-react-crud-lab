import { useState, useEffect } from "react";

import MovieListing from "./MovieListing";

import { getAll, getAllShows } from "../../api/fetch";

import "./MovieIndex.css";

export default function MoviesIndex() {
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

  useEffect(() => {
    getAll("movies")
      .then((res) => {
        setMovies(res);
        setAllMovies(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleTextChange = (e) => {
    const searchVal = e.target.value;
    setSearchMovie(searchVal);
    const filteredMovies = allMovies.filter((movie) =>
      movie.title.toLowerCase().match(searchVal.toLowerCase())
    );
    setMovies(filteredMovies);
  };

  return (
    <div id="movie-listing">
      <h2>All Movies</h2>
      <section className="movies-elements">
        <p className="count">Movie count: <span>{movies.length}</span></p>
        <button>add a new movie</button>
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
            />
          );
        })}
      </section>
    </div>
  );
}

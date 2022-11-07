import { useState, useEffect } from "react";

import MovieListing from "./MovieListing";

import { getAll } from "../../api/fetch";

import "./MovieIndex.css";

export default function MoviesIndex() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAll("movies")
      .then((res) => setMovies(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="movie-listing">
      <h2>All Movies</h2>
      <section className="movies-elements">
        <button>add a new movie</button>
        <label htmlFor="searchMovies">
          Search Movies: <input type="text" id="searchMovies" />
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

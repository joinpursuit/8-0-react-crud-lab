import MovieListing from "./MovieListing";

import "./MovieIndex.css";

export default function MoviesIndex() {
  return (
    <div id="movie-listing">
      <h2>All Movies</h2>
      <section className="movies-elements">
        <button>add a new movie</button>
        <label htmlFor="searchMovies">
          Search Movies: <input type="text" id="searchMovies" />
        </label>
      </section>
      <MovieListing />
    </div>
  );
}

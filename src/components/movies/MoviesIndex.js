import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllMovies } from "../../api/fetch";
import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "./MovieListings";
import "./MoviesIndex.css";

export default function MoviesIndex() {
  const [movies, setMovies] = useState([]);
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    getAllMovies()
      .then((res) => {
        setMovies(res);
        setLoadingError(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingError(true);
      }, []);
  });

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
              // value={searchTitle}
              id="searchTitle"
              // onChange={handleTextChange}
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

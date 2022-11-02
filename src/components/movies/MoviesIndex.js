import { useState, useEffect } from "react";
import { getAllMovies } from "../../api/fetch";
import { Link } from "react-router-dom";
import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "./movieListing";
import "./MoviesIndex.css";

export default function MoviesIndex() {
  const [loadingError, setLoadingError] = useState(false);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((res) => {
        setMovies(res);
        setLoadingError(false);
      })
      .catch((err) => {
        console.error(err);
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
              // value={searchTitle}
              id="searchTitle"
              // onChange={handleTextChange}
            />
          </label>
          <section className="movies-index">
            {/* <!-- ShowListing components --> */}
            {movies.map((movie) => {
              return <MovieListing movie={movie} key={movie.id} />;
            })}
          </section>
        </section>
      )}
    </div>
  );
}

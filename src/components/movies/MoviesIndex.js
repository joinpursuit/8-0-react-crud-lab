import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "./MovieListing";
import { getAllMovies, filterMovies } from "../../api/fetch";
import "./MoviesIndex.css";

export default function MoviesIndex() {
  const [loadingError, setLoadingError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    getAllMovies()
      .then(res => {
        setAllMovies(res);
        setMovies(res);
        setLoadingError(false);
      })
      .catch(error => {
        setLoadingError(true);
      });
  }, []);

  function handleTextChange(e) {
    const title = e.target.value;
    const result = title.length ? filterMovies(title, allMovies) : allMovies;
    setMovies(result);
    setSearchTitle(title);
  }

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
            Search Shows:
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
            })}{" "}
          </section>
        </section>
      )}
    </div>
  );
}

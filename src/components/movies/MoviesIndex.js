import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllMovies } from "../../api/fetch";
import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "./MovieListing";
import "./MoviesIndex.css";

function filterMovies(search, movies) {
  return movies.filter((movie) => {
    return movie.title.toLowerCase().match(search.toLowerCase());
  });
}

export default function MoviesIndex() {
  const [movies, setMovies] = useState([]);
  const [loadingError, setLoadingError] = useState(false);
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
        setMovies(res);
        setAllMovies(res);
        setLoadingError(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingError(true);
      });
  }, []);

  return (
    <div>
      {false ? (
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

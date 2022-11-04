import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "./MovieListing";
import "./MoviesIndex.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllMovies } from "../../api/fetch";

export default function MoviesIndex() {
  const [loadingError, setLoadingError] = useState(false);

  const [movies, setMovies] = useState([]); //shows collection to present to user
  const [allMovies, setAllMovies] = useState([]); // storage of all the shows
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    getAllMovies()
      .then((response) => {
        setAllMovies(response);
        setMovies(response);
        setLoadingError(false);
      })
      .catch((error) => {
        console.error(error);
        setLoadingError(true);
      });
  }, []);

  function filterMovies(search, movies) {
    return movies.filter((movie) => {
      return movie.title.toLowerCase().match(search.toLowerCase());
    });
  }
  function handleTextChange(event) {
    const title = event.target.value;
    const result = title.length ? filterMovies(title, allMovies) : allMovies;

    setSearchTitle(title);
    setMovies(result);
  }

  return (
    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="shows-index-wrapper">
          <h2>All Movies</h2>
          <button>
            <Link to="/movies/new">Add a new show</Link>
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

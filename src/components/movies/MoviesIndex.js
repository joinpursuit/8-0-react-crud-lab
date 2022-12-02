import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import { getAllShows } from "../../api/fetchMovies";
import MovieListing from "./MovieListing";
import "../shows/ShowsIndex.css";

export default function MoviesIndex() {
  const [loadingError, setLoadingError] = useState(false);
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    getAllShows()
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

  function handleTextChange(event) {
    const title = event.target.value;
    const result = title.length ? filterShows(title, allMovies) : allMovies;
  
    setSearchTitle(title);
    setMovies(result);
  }
  function filterShows(search, movies) {
    return movies.filter((movies) => {
      return movies.title.toLowerCase().match(search.toLowerCase());
    });
  }
  

  return (
    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="shows-index-wrapper">
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
          <section className="shows-index">
            {movies.map((movies) => {
              return <MovieListing movies={movies} key={movies.id} />;
            })}
          </section>
        </section>
      )}
    </div>
  );
}

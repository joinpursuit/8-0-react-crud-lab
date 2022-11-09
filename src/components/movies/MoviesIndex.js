import { useState, useEffect } from "react";
import { getAllMovies } from "../../api/fetch";
import { Link } from "react-router-dom";
import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "./MovieListing";
import "./MoviesIndex.css";

// this function will be called in the handleTextChange function. It will use the .match method to compare the search argument, which is what the user has inputted, with the shows argument, which will come from the allShows state. It will return an array with the shows that fit the criteria

function filterMovies(search, movies) {
  return movies.filter((movie) =>
    movie.title.toLowerCase().match(search.toLowerCase())
  );
}

export default function MoviesIndex() {
  const [loadingError, setLoadingError] = useState(false);

  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);

  const [searchTitle, setSearchTitle] = useState("");

  // This function is used in your JSX input below to grab the users input using the event object's target (the input's) value. Result variable checks to see if the string has a length and if so uses the filterShow function above to find moves containing that string. Otherwise it shows all of the shows. Notice that we set both the shows variable and the searchTitle variable with the result  of the result variable.
  const handleTextChange = (e) => {
    const title = e.target.value;
    const result = title.length ? filterMovies(title, allMovies) : allMovies;
    setMovies(result);
    setSearchTitle(title);
  };

  useEffect(() => {
    // this calls the function located in our fetch.js that will GET all the shows from our backend server.
    getAllMovies()
      .then((res) => {
        // we set this variable so that we can handle our search in the future
        setAllMovies(res);
        // we set this variable so that we have a list of all of the shows.
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
              value={searchTitle}
              id="searchTitle"
              onChange={handleTextChange}
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



import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import MovieListing from "./MovieListing";
import ErrorMessage from "../errors/ErrorMessage";
import "./MoviesIndex.css";
import { getAllMovies } from "./MovieAPI"; 

export default function MoviesIndex() {
  // error handling
  const [loadingError, setLoadingError] = useState(false);

  // to render unordered list of movies to user on webpage. 
  const [movies, setMovies] = useState([]);

  // original list of movies for reset after a search. used to save fetch into somewhere
  const [allMovies, setAllMovies] = useState([]);

  // user search input
  const [searchTitle, setSearchTitle] = useState("");

  // renders the list of movies after succesful fetch 
  useEffect(() => {
    getAllMovies()
      .then((response) => {
        setMovies(response);
        setAllMovies(response);
        setLoadingError(false);
      })
      .catch((error) => {
        console.log(error);
        setLoadingError(true);
      });
  }, []);


  // handles the user text input for the search, the onChange prop triggers the function update the state based on the input and the newly updated state gets passed as the value for the input. 
  function handleTextChange (event) {
    const title = event.target.value;
    const result = title.length ? filterMovies(title, allMovies) : allMovies;
    setSearchTitle (title);
    setMovies(result);
  }

  // filter the movies with the .match() method. If a string matches with .match("string") it will return true. if it is false we will filter it out. toLowerCase() method is used to add uppercase input capability. 
  function filterMovies(search, movies) {
    return movies.filter((movie) => {
      return movie.title.toLowerCase().match(search.toLowerCase());
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
            {movies.map((movie) => {
              return <MovieListing movie={movie} key={movie.id} />;
            })}
          </section>
        </section>
      )}
    </div>
  );
}


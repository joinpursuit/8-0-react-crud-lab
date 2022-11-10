import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";
import {Link} from 'react-router-dom'


import "./MoviesIndex.css";

import MovieListing from "./MovieListing";
import { getAllMovies } from "../../api/fetch";

function filterMovies(search, movies) {
  return movies.filter((movie) => movie.title.toLowerCase().match(search.toLowerCase()))
}

export default function MoviesIndex() {

const [movies, setMovies] = useState([])
const [loadingErr, setLoadingErr] = useState(false);
const [allMovies, setAllMovies] = useState([]);
const [searchTitle, setSearchTitle] = useState("");

const handleTextChange = ((e) => {
  const title = e.target.value;
  const result = title.length ? filterMovies(title, allMovies) : allMovies;
  setMovies(result);
  setSearchTitle(title);
});

useEffect(() => {
  getAllMovies()
  .then((res) => {
    setAllMovies(res);
    setMovies(res);
    setLoadingErr(false);
  })
  .catch((err) => {
    console.log(err);
    setLoadingErr(true);
  })
}, []);

  return (
    <div>
      {loadingErr ? (
        <ErrorMessage />
      ) : (
        <section className="movies-index-wrapper">
          <h2>All Movies</h2>
          <button>
            <Link to="/movies/new">Add a new Movie</Link>
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







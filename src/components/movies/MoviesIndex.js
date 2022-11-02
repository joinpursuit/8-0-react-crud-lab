import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import ErrorMessage from "../errors/ErrorMessage";

import "./MoviesIndex.css";

import { getAllMovies } from "../../api/fetch";
import MovieListing from "./MovieListing";

export default function MoviesIndex() {
  const [err, setErr] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      // 2nd '.then'; 1st one in fetch.js
      .then((response) => {
        setMovies(response);
        setErr(false);
      })
      .catch((error) => {
        console.error(error);
        setErr(true);
      });
  }, []);

  // return <p>Movie List</p>;
  return (
    <div>
      {err ? (
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
            {/* <!-- MovieListing components --> */}
            {movies.map((movie) => {
              return <MovieListing movie={movie} key={movie.id} />;
            })}
          </section>
        </section>
      )}
    </div>
  );
}

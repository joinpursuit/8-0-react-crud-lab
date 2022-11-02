import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {getAllMovies} from "../../api/fetch"
import ErrorMessage from "../errors/ErrorMessage";
import MoviesListing from "./MovieListing"

export default function MoviesIndex() {

  const [loadingError, setLoadingError] = useState(false)
  const [movies, setMovies] = useState([])


  useEffect(() => {
    getAllMovies()
    .then(res =>{
      setMovies(res)
      setLoadingError(false)
    })
    .catch(err => {
      console.log(err)
      setLoadingError(true)
    })
  }, [])


  return (
    <div>
    {loadingError ? (
      <ErrorMessage />
    ) : (
      <section className="movies-index-wrapper">
        <h2>All Movies</h2>
        <button>
          <Link to="/shows/new">Add a new movie</Link>
        </button>
        <br />
        <label htmlFor="searchTitle">
          Search Movies:
          <input
            type="text"
            
            id="searchTitle"
          
          />
        </label>
        <section className="movie-index">
        {movies.map((movie) => {
          return (

            <MoviesListing movie={movie} key={movie.id}/>
          )
        })}
          
        </section>
      </section>
    )}
  </div>
  )
}


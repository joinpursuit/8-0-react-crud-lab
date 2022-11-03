import { useEffect, useState } from "react";
import { getAllMovies } from "../../api/fetch";
import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "./MovieListing";

export default function MoviesIndex() {
  const [movies, setMovies] = useState([])
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    getAllMovies()
      .then(res => {
        setMovies(res)
      })
  })

  return (
    <div>
      {
        loadingError 
        ?
        (<ErrorMessage />)
        :
        (
        <section>
          <h2>All Movies</h2>
          <button>Add a new movie</button>
          <br/>
          <label htmlFor="searchMovie" >
            Search Movies:
            <input
              type="text"
              id="searchMovie"
            />
          </label>
          <section className="movies-index">
            {
              movies.map((movie) => {
                return <MovieListing />
              })
            }
          </section>
        </section>
        )
      }
    </div>
  )
}

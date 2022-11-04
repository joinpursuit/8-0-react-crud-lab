import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import MoviesListing from "./MoviesListing"
import ErrorMessage from "../errors/ErrorMessage"

import { getAllMovies } from "../../api/fetch"

// comparing the entered movie in the search input to the movies in list by filtering the entire movie list and changing everything
// to lowercase to match/find the title the is exactly the same as inputted in the search bar.
function filterMovies(searchMovies, movies) {
  return movies.filter((movie) =>
    movie.title.toLowerCase().match(searchMovies.toLowerCase())
  )
}

export default function MoviesIndex() {
  const [movies, setMovies] = useState([])
  const [searchMovies, setSearchMovies] = useState("")
  const [allMovies, setAllMovies] = useState([])
  const [loadingError, setLoadingError] = useState(false)

  useEffect(() => {
    getAllMovies()
      .then((res) => {
        setMovies(res)
        setAllMovies(res)
        setLoadingError(false)
      })
      .catch((err) => {
        console.log(err).setLoadingError(true)
      })
  }, [])

  function handleTextChange(event) {
    const movieTitle = event.target.value
    const results = movieTitle.length
      ? filterMovies(movieTitle, allMovies)
      : allMovies
    setMovies(results)
    setSearchMovies(movieTitle)
  }
  return (
    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="movies-index-wrapper">
          <h2>All Movie</h2>
          <button>
            <Link to="/movies/new">Add New Movie</Link>
          </button>
          <br></br>
          <label htmlFor="SearchMovies">
            Search Movies:
            <input
              type="text"
              value={searchMovies}
              id="searchMovies"
              onChange={handleTextChange}
            />
          </label>
          <section className="movies-index">
            {movies.map((movie) => {
              return <MoviesListing movie={movie} key={movie.id} />
            })}
          </section>
        </section>
      )}
    </div>
  )
}

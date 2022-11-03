import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import MoviesListing from "react"

import { getAllMovies } from "../../api/fetch"

export default function MoviesIndex() {
  const [movies, setMovies] = useState([])
  const [searchMovies, setSearchMovies] = useState("")
  const [allMovies, setAllMovies] = useState([])

  useEffect(() => {
    getAllMovies()
      .then((res) => {
        setMovies(res)
        setAllMovies(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  function handleTextChange(e) {
    const movieTitle = e.target.value

    setMovies()
    setSearchMovies(movieTitle)
  }
  return (
    <div>
      <section className="movies-index-wrapper">
        <p>Movie List</p>
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
    </div>
  )
}

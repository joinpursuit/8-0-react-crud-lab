import { useEffect, useState } from "react";
import { getAllMovies } from "../../api/fetch";
import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "./MovieListing";
import "./MoviesIndex.css"

export default function MoviesIndex() {
  const [movies, setMovies] = useState([])
  const [movieSearch, setMovieSearch] = useState([])
  const [search, setSearch] = useState("")
  const [loadingError, setLoadingError] = useState(false);

  const handleTextChange = (e) => {
    const title = e.target.value
    const results = title.length ? filterMovies(search, movies) : movieSearch

    setSearch(title)
    setMovieSearch(results)
  }

  const filterMovies = (search, movies) => {
    return movies.filter((movie) => movie.title.toLowerCase().match(search.toLowerCase()))
  }

  useEffect(() => {
    getAllMovies()
      .then(res => {
        setMovies(res)
        setMovieSearch(res)
        setLoadingError(false)
      })
      .catch(err => {
        console.log(err)
        setLoadingError(true)
      })
  }, [])

  return (
    <div>
      {
        loadingError 
        ?
        (<ErrorMessage />)
        :
        (
        <section className="movies-index-wrapper">
          <h2>All Movies</h2>
          <button>Add a new movie</button>
          <br/>
          <label htmlFor="searchMovie" >
            Search Movies: 
            <input
              type="text"
              id="searchMovie"
              onChange={handleTextChange}
            />
          </label>
          <section className="movies-index">
            {
              movies.map((movie) => {
                return <MovieListing movie={movie} key={movie.id}/>
              })
            }
          </section>
        </section>
        )
      }
    </div>
  )
}

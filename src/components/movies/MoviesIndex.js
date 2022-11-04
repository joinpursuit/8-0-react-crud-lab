import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMovies } from "../../api/fetch";
import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "./MovieListing";
import "./MoviesIndex.css"

export default function MoviesIndex() {
  const [loadingError, setLoadingError] = useState(false);
  const [movies, setMovies] = useState([])
  const [movieSearch, setMovieSearch] = useState([])
  const [search, setSearch] = useState("")

  const handleTextChange = (e) => {
    const title = e.target.value
    const results = title.length ? filterMovies(title, movieSearch) : movieSearch

    setSearch(title)
    setMovies(results)
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
          <Link to="/movies/new">
            <button>Add a new movie</button>
          </Link>
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

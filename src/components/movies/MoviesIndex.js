import { useState, useEffect } from "react";
import { getAllMovies, filterSearch } from "../../api/fetch";
import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "./MovieListing";


export default function MoviesIndex() {
/* 
  -make fetch call
  - store data for movies in state
  - map through data -> display data
  -store id value 
  -search movie function (state, onChange function, filter function)
  */
// Declare state to hold movies
  const [movies, setMovies] = useState([])
// Declare state for error message
const [error, setError] = useState(false)
// Declare state for movieSearch
const [movieSearch, setMovieSearch] = useState("")
// Declare State for all movies for search updates
const [movieSearchData, setMovieSearchData] = useState([])

function handleMovieSearch(e) {
  const input = e.target.value
  input ? setMovies(filterSearch(input, movieSearchData)) : setMovies(movieSearchData)

  setMovieSearch(input)
}

  //  use Effect to call fetch on page load
  useEffect(() => {
    getAllMovies()
    .then(respJson => {
      setMovies(respJson)
      setMovieSearchData(respJson)
    })
    .catch(err => setError(true))
  }, [])

  return(
    <div>
      {error ? <ErrorMessage /> :
      <section className="shows-index-wrapper">
        <h2>All Movies</h2>
        <button>Add New Movie</button>
        <br />
        {/* Search bar input */}
        <label htmlFor="searchMovie">
            Search Movies:
            <input
              type = "text"
              value = {movieSearch}
              id = "searchMovie"
              onChange={(event) => {handleMovieSearch(event)}}
            />
          </label>

          <section className="shows-index">
            {/* map over movies and return a component for each film here */}
            {
              movies.map(({title, description, listedIn, id, rating, releaseYear }) => 
                <MovieListing
                key = {id}
                id = {id}
                title ={title}
                description = {description}
                category = {listedIn} 
                rating = {rating}
                releaseYear = {releaseYear}
                />
              )
            }
          </section>


      </section>}
    </div>
  ) 
}

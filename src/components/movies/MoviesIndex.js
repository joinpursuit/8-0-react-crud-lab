import { useState, useEffect } from "react";
import { getAllMovies } from "../../api/fetch";
import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "./MovieListing";


export default function MoviesIndex() {
/* 
  -make fetch call
  - store data for movies in state
  - map through data -> display data
  -store id value 
  */
// Declare state to hold movies
  const [movies, setMovies] = useState([])
// Declare state for error message
const [error, setError] = useState(false)



  //  use Effect to call fetch on page load
  useEffect(() => {
    getAllMovies()
    .then(respJson => setMovies(respJson))
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
              type="text"
              // value={searchInput}
              id="searchMovie"
              // onChange={(event) => {handleSearch(event)}}
            />
          </label>

          <section className="shows-index">
            {/* map over movies and return a component for each film here */}
            {
              movies.map(({title, description, listedIn, id, rating }) => 
                <MovieListing
                key = {id}
                id = {id}
                title ={title}
                description = {description}
                category = {listedIn} 
                rating = {rating}
                />
              )
            }
          </section>


      </section>}
    </div>
  ) 
}

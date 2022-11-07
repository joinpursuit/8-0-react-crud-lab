import { useState, useEffect } from "react";
import { getAllMedia, filterSearch } from "../../api/fetch";
import IndexPage from "../reusedComponents/IndexPage";


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
    getAllMedia(`movies`)
    .then(respJson => {
      setMovies(respJson)
      setMovieSearchData(respJson)
    })
    .catch(err => setError(true))
  }, [])

  return(
    
    <IndexPage 
    errorVar = {error}
    endpoint = {`movies`} 
    searchVar = {movieSearch}
    handleSearchFunction = {handleMovieSearch} 
    dataVar = {movies}
    />
    
  ) 
}

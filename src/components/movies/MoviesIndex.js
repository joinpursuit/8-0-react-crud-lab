import { Link } from "react-router-dom";
import {useState} from "react"
import {useEffect} from "react"
import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "./MovieListing";
// import "./MoviesIndex.css" 
import {getAllMovies} from  "../../api/fetch";


function filterMovies(search, movies){
  return movies.filter(movie => movie.title.toLowerCase().match(search.toLowerCase()))
}


export default function MoviesIndex() {
  
const [loadingError, setLoadingError] = useState(false)
const [movies, setMovies] = useState([])
const [allMovies, setAllMovies] = useState([])
const [searchTitle, setSearchTitle] = useState("")

function handleTextChange(e){
  const title = e.target.value
  const result = title.length ? filterMovies(title, allMovies) : allMovies
  setMovies(result)
  setSearchTitle(title)
}
  
//useEffect causes the fetch to launch as soon as the page is load
useEffect(() =>{
  getAllMovies()
  .then(res => {
    setAllMovies(res)
    setLoadingError(false)
})
.catch(err =>{
  console.log(err)
  setLoadingError(true)
})
}, [])

  return (
    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="movie-index-wrapper">
          <h2>All Movies</h2>
          <button>
            <Link to="/movie/new">Add a new movie</Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search Movies:
            <input
              type="text"
              value={searchTitle}
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>
          <section className="movies-index">
            {/* <MovieListing components map-->  */}
             {
              movies.map((movie) =>{
                return < MovieListing movie={movie}  key={movie.id}/>
              })
            }
          </section>
        </section>
      )}
    </div>
  );
}

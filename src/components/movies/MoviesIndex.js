import { Link } from "react-router-dom";

import ErrorMessage from "../errors/ErrorMessage";
import { useEffect, useState } from "react";
import { getAllMovies } from "../../api/fetch"; 
// "../"  es salir de la carpeta de donde estoy en este caso en dos niveles, luego entro a la carpeta de la api"
import "./MoviesIndex.css";
import "./MovieListing"
import MovieListing from "./MovieListing";

export default function MoviesIndex() {
  const [movies, setMovies] = useState([]) 

  const [matchingMovies, setMatchingMovies] = useState([])
  const [filterValue, setFilterValue] = useState('') 

  const [isError, setIsError] = useState(false)

  useEffect(() => {
    // GET ALL MOVIES EJECUTA LA PETICION
    // SI TODO VA BIEN

    getAllMovies()
      // PETICION RESUELTA
      .then(moviesList =>  {
        setMovies(moviesList) // el estado se transforma a un array
        setMatchingMovies(moviesList)
      })
      .catch(() => setIsError(true))
  }, []) 


  useEffect(() => {
    const filteredMovies = movies.filter(({ title }) => 
      title
        .toLowerCase()
        .includes(filterValue.toLowerCase()))

    setMatchingMovies(filteredMovies)
  }, [filterValue, movies])

  const handleTextChange = (event) => {
    setFilterValue(event.target.value)
  }

  
 
  return (
    <div>
      {isError ? (
        <ErrorMessage />
      ) : (
        <section className="movies-index-wrapper">
          <h2>All Movies</h2>
          <button>
            <Link to="/movies/new">Add a new show</Link>
          </button>
          <br /> 
          <label htmlFor="searchTitle">
            Search Movies:
            <input
              type="text"
              value={filterValue}
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>
          <section className="movies-index">
            {/* <!-- MovieListing components --> */}
              {matchingMovies.map(movie => <MovieListing key={movie.id} movie={movie} />)}
          </section>
        </section>
      )}
    </div>
  );
}

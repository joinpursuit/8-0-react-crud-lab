
  import { useState, useEffect } from "react";
  import { Link } from "react-router-dom";
  
  import ErrorMessage from "../errors/ErrorMessage";
  import MovieListing from "./MovieListing";
  
  import "./MoviesIndex.css";
  
  import { getAllMovies } from "../../api/fetch";
  
  function filterMovies(search, moives){
    return moives.filter((movie) => movie.title.toLowerCase().match(search.toLowerCase())
    )
  }
  
  
  export default function MoviesIndex() {
    const [loadingError, setLoadingError] = useState(false)
    const [movies, setMovies] = useState([])
    const [allMovies, setAllMovies] = useState([])
    const [searchTitle, setSearchTitile] = useState('')
  
    function handleTextChange(e){
      const title= e.target.value;
      const result = title.length ? filterMovies(title, allMovies) : allMovies;
      setMovies(result)
      setSearchTitile(title)
    }
  
  
    useEffect(() => {
      getAllMovies()
        .then(res => {
          setAllMovies(res)
          setMovies(res)
          setLoadingError(false)
        })
        .catch(err => {
          console.log(err)
          setLoadingError(true)
        })
    }, [])
  
  return (
    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="movies-index-wrapper">
          <h2>Movie List</h2>
          <button>
            <Link to="/moives/new">Add a new show</Link>
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
            { movies.map((movie) => {
              return <MovieListing movie={movie} key={movie.id}/>
            })
            }
          </section>
        </section>
      )}
    </div>
  );
}

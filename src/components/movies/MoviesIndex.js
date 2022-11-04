import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {getAllMovies} from "../../api/fetch"
import ErrorMessage from "../errors/ErrorMessage";
import MoviesListing from "./MovieListing"
import ReactPaginate from "react-paginate";
import "./MovieIndex.css"

const pageData = 10

export default function MoviesIndex() {

  const [loadingError, setLoadingError] = useState(false)
  const [movies, setMovies] = useState([])
  const [allMovies, setAllMovies] = useState([])
  const [searchTitle, setSearchTitle] = useState("")
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    getAllMovies()
    .then(res =>{
      setAllMovies(res)
      setMovies(res)
      setLoadingError(false)
    })
    .catch(err => {
      console.log(err)
      setLoadingError(true)
    })
  }, [])


  function handlePageChange ({selected: selectedPage}){
    setCurrentPage(selectedPage)
  }

  const offSet = currentPage * pageData

  const currentPageData = movies
  .slice(offSet, offSet + pageData)
  .map((movie) => <MoviesListing movie={movie} key={movie.id}/>)
  
  const pageCount = Math.ceil(movies.length/pageData) 

  function filterMovies(search, movies){
    return(
      movies.filter((movie) => movie.title.toLowerCase().match(search.toLowerCase()))
    )
  }

  const handleTextChange = (event) => {
    const title = event.target.value
    const result = title.length ? filterMovies(title , allMovies) : allMovies
    setMovies(result)
    setSearchTitle(title)
  }


  return (
    <div>
    {loadingError ? (
      <ErrorMessage />
    ) : (
      <section className="movies-index-wrapper">
        <h2>All Movies</h2>
        <button>
          <Link to="/movies/new">Add a new movie</Link>
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
        <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination-link"}
            nextLinkClassName={"pagination-link"}
            />
          <section className="movies-index">
            
            {currentPageData}
          </section>
      </section>
    )}
  </div>
  )
}


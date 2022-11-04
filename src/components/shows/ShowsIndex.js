import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import {getAllShows} from "../../api/fetch"
import ErrorMessage from "../errors/ErrorMessage";
import ShowListing from "./ShowListing"
import "./ShowsIndex.css";

const pageData = 10

export default function ShowsIndex() {
  const [loadingError, setLoadingError] = useState(false)
  const [shows, setShows] = useState([])
  const [allShows, setAllshows] = useState([])
  const [searchTitle, setSearchTitle] = useState("")
  const [currentPage, setCurrentPage] = useState(0)

  
  
  useEffect(() => {
    getAllShows()
    .then(res =>{
      setAllshows(res)
      setShows(res)
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
  
  const currentPageData = shows
  .slice(offSet, offSet + pageData)
  .map((show) => <ShowListing show={show} key={show.id}/>)
  
  const pageCount = Math.ceil(shows.length/pageData) 
  
  function filterShows(search, shows){
    return(
      shows.filter((show) => show.title.toLowerCase().match(search.toLowerCase()))
    ) 
    }
    
    const handleTextChange = (event) => {
      const title = event.target.value
      const result = title ? filterShows(title, allShows) : allShows
      setShows(result)
      setSearchTitle(title)
    }
      
 
console.log(shows)
  return (
    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="shows-index-wrapper">
          <h2>All Shows</h2>
          <button>
            <Link to="/shows/new">Add a new show</Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search Shows:
            <input
              type="text"
               value={searchTitle}
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
            {/* <!-- ShowListing components --> */}
            <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={handlePageChange}
            />
            {currentPageData}
          </section>
        </section>
      )}
    </div>
  );
}

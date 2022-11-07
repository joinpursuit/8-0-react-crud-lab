import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllMedia, filterSearch } from "../../api/fetch";


import ErrorMessage from "../errors/ErrorMessage";

import "./ShowsIndex.css";
import ShowListing from "./ShowListing";

export default function ShowsIndex() {
// create loading error state
const [loadingError, setLoadingError] = useState(false)
// declare state that will store data from fetch call to get all shows/ the function getAllShows, and call it in a useEffect to happen on page load
const [allShows, setAllShows] = useState([])
// Declare new slice of state to store all the shows
const [allShows2, setAllShows2] = useState([])
// Declare state to hold search bar input
const [searchInput, setSearchInput] = useState("")

// function to handle user search input
function handleSearch(e) {
  const input = e.target.value
  if(input){
    setAllShows(filterSearch(input, allShows2))
  }
  else {
    setAllShows(allShows2)

  }
  setSearchInput(input)
}


// use effect to fetch data on page load
useEffect(() => {
  getAllMedia(`shows`)
  .then(respJson => {
    // set allshows2 to resp from fetch as well
    setAllShows2(respJson)
    setAllShows(respJson)
    setLoadingError(false)
  })
  .catch(err => {
    setLoadingError(true)
  })
}, [])
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
          {/* Search bar input, to be updated with value searchInput */}
          <label htmlFor="searchTitle">
            Search Shows:
            <input
              type="text"
              value={searchInput}
              id="searchTitle"
              onChange={(event) => {handleSearch(event)}}
            />
          </label>
          
          <section className="shows-index">
            {/* <!-- ShowListing components -> import showListing component to map over info from fetch and return showListing Component for each show--> */}

            {
              allShows.map(show => {
                return <ShowListing
                show = {show}
                key = {show.id} />
              })
            }
          
          </section>
        </section>
      )}
    </div>
  );
}

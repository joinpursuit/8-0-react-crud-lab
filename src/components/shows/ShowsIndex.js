
import { useState, useEffect } from "react";
import { getAllMedia, filterSearch } from "../../api/fetch";

import IndexPage from "../reusedComponents/IndexPage";

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
    
    <IndexPage 
    errorVar = {loadingError}
    endpoint = {`shows`} 
    searchVar = {searchInput}
    handleSearchFunction = {handleSearch} 
    dataVar = {allShows}
    />
   
  );
}

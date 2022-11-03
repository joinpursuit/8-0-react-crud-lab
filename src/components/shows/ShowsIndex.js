import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {getAllShows} from "../../api/fetch"
import ErrorMessage from "../errors/ErrorMessage";
import ShowListing from "./ShowListing"
import "./ShowsIndex.css";

export default function ShowsIndex() {
  const [loadingError, setLoadingError] = useState(false)
  const [shows, setShows] = useState([])
  const [allShows, setAllshows] = useState([])
  const [searchTitle, setSearchTitle] = useState("")


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
  
  //    function removeObject(arr, id) {
  //     const objIndex = arr.findIndex((obj) => obj.id === id);
  //      arr.splice(objIndex, 1);
  //      return arr;
  //    }

  // //  removeObject(shows, `0sgjGuG`)
 
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
            {shows.map((show) => {
              return <ShowListing show={show} key={show.id}/>
            })}
          </section>
        </section>
      )}
    </div>
  );
}

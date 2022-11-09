import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getAllShows } from "../../api/fetch";
import ShowListing from "./ShowListing"

import ErrorMessage from "../errors/ErrorMessage";

import "./ShowsIndex.css";

export default function ShowsIndex() {
  const [LoadingError, setLoadingError] = useState(false);
  const [shows, setShows] = useState([]); // displays collection of shows to the user 
  const [allShows, setAllShows] = useState([]); // <- So we have access to all shows when we need to use them
  const [searchTitle, setSearchTitle] = useState(""); 

useEffect(() => {
  getAllShows()
    .then((response) => {
      setAllShows(response);
      setShows(response);
      setLoadingError(false);
    })
    .catch((error) => {
      console.error(error);
      setLoadingError(true);
    });
}, []); // Be sure to always add the empty dependancies array 
        // The empty dependencie array will cause the useEffect to run only when the component is initially mounted


  function filterShows(search, shows){
    return shows.filter(show => {
      return show.title.toLowerCase().match(search.toLowerCase());
    })
  }

  function handleTextChange(event) {
    const title = event.target.value;
    const result = title.length ? filterShows(title, allShows) : allShows;
  
    setSearchTitle(title);
    setShows(result);
  }
  

  return (
    <div>
      {LoadingError ? (
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
            {/* <!-- ShowListing components --> */
              shows.map(show => {
                return <ShowListing show={show} key={show.id} />
              })
            }
          </section>
        </section>
      )}
    </div>
  );
}

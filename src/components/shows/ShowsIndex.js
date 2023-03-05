import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllShows } from "../../api/fetch";

import ErrorMessage from "../errors/ErrorMessage";
import ShowListing from "./ShowListing";

import "./ShowsIndex.css";

export default function   ShowsIndex() {
  const [shows, setShows] = useState([])

  const [matchingShows, setMatchingShows] = useState([])
  const [filterValue, setFilterValue] = useState('') 

  const [isError, setIsError] = useState(false)
  
  useEffect(() => {
    getAllShows()
      .then(showsList => {
        setShows(showsList)
        setMatchingShows(showsList)
      })
      .catch(() => setIsError(true))
  }, [])

  useEffect(() => {
    // LA LOGICA PARA FILTRAR LOS SHOWS 

    // filter value = suits
    // shows = [start TREK, sUits, queens gaMbIt]

    // sUits ==> suits
    // "suits" incluye "suits"

    // filteredShows = ["suits"]
    
    const filteredShows = shows.filter(({ title }) => 
      title
        .toLowerCase()
        .includes(filterValue.toLowerCase()))

    setMatchingShows(filteredShows)
  }, [filterValue, shows])
  
////////////////////////////////////////////////////////////////
  const handleTextChange = (event) => {
    setFilterValue(event.target.value)
  }

// Porque se repite setFilterValue cual va primero?
  return (
    <div>
      {isError ? (
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
              value={filterValue}
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
              {/* <!-- ShowListing components --> */}
              {matchingShows.map(show => <ShowListing key={show.id} show={show} />)}
          </section>
        </section>
      )}
    </div>
  );
}

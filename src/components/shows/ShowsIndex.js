import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ErrorMessage from "../errors/ErrorMessage";
import ShowListing from "./ShowListing"

import "./ShowsIndex.css";

import { getAllShows } from "../../api/fetch";

export default function ShowsIndex() {
  const [loadingError, setLoadingError] = useState(false)
  const [shows, setShows] = useState([])
  const [allShows, setAllShows] = useState([])
  const [searchTitle, setSearchTitle] = useState("")

  function handleTextChange(e){
    const title = e.target.value
    const result = title.length ? filterShows(title, allShows) : allShows
    setShows(result)
    setSearchTitle(title)
  }

  function filterShows(search, shows){
    return shows.filter((show) => show.title.toLowerCase().match(search.toLowerCase()))
  }

  useEffect(() => {
    getAllShows()
      .then(res => {
        setShows(res)
        setAllShows(res)
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
            {
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

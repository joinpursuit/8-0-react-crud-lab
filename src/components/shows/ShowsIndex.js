import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import ErrorMessage from "../errors/ErrorMessage"
import ShowListing from "react"
import "./ShowsIndex.css"

import { getAllShows } from "../../api/fetch"

export default function ShowsIndex() {
  const [loadingError, setLoadingError] = useState(false)
  const [shows, setShows] = useState([])

  useEffect(() => {
    getAllShows()
      .then((res) => {
        setShows(res)
        setLoadingError(false)
      })
      .catch((err) => {
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
              // value={searchTitle}
              id="searchTitle"
              // onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
            {shows.map((show) => {
              return <ShowListing show={show} key={show.id} />
            })}
          </section>
        </section>
      )}
    </div>
  )
}

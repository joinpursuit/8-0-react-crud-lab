import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllShows } from "../../api/fetch";
import ShowListing from "./ShowListing";
import ErrorMessage from "../errors/ErrorMessage";


import "./ShowsIndex.css";

export default function ShowsIndex() {
  const [loadindError, setLoadingError] = useState
  (false);
  const [shows, setShows] = useState([]);
  const [allShows, setAllShows] = useState([]);
  const [searchTitle, setSearchTitle]  = useState
  ("");

  useEffect(() => {
    getAllShows()
    .then((response) => {
      setAllShows(response);
      setShows(response);
      setLoadingError(false)
    })
    .catch((error) => {
      setLoadingError(true);
    });
  }, []); // Empty dependencies array will cause useEffect

  function filterShows(search, shows) {
    return shows.filter((show) => {
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
      {loadindError ? (
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
            {shows.map((show) => {
              return <ShowListing show={show} key={show.id} />
            })}
            {/* <!-- ShowListing components --> */}
          </section>
        </section>
      )}
    </div>
  );
}

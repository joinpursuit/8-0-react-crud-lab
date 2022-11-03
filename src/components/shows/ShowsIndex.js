import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ShowListing from "./ShowListing";
import ErrorMessage from "../errors/ErrorMessage";

import "./ShowsIndex.css";

import { getAllShows } from "../../api/fetch";

export default function ShowsIndex() {
  const [shows, setShows] = useState([]);
  const [loadingError, setLoadingError] = useState(false);
  const [allShows, setAllShows] = useState();
  const [searchTitle, setSearchTitle] = useState("");

  function handleTextChange(e) {
    const title = e.target.value;
    setSearchTitle(title);
  }

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
  }, []);

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
            {shows.map((show) => {
              return <ShowListing show={show} key={show.id} />;
            })}
          </section>
        </section>
      )}
    </div>
  );
}

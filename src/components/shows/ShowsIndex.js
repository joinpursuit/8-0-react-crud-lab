import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ErrorMessage from "../errors/ErrorMessage";
import { getAllShows } from "../../api/fetch";
import ShowListing from "./ShowListing";

import "./ShowsIndex.css";

export default function ShowsIndex() {
  const [shows, setShows] = useState([]);
  const [allShows, setAllShows] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(false);
  useEffect(() => {
    setLoading(true);
    getAllShows()
      .then((response) => {
        setAllShows(response);
        setShows(response);
        setLoading(false);
        setLoadingError(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setLoadingError(true);
      });
    return () => {
      console.log("show page unmounted");
    };
  }, []);

  function filterShows(search, shows) {
    return shows.filter((show) => {
      return show.title.toLowerCase().match(search.toLowerCase());
    });
  }

  function handleTextChange(event) {
    const title = event.target.value;
    const result = title.length ? filterShows(title, allShows) : allShows;

    setSearchTitle(title);
    setShows(result);
  }

  return (
    <div>
      {loading && (
        <section className="loading">
          <p>Loading...</p>
        </section>
      )}
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section className="shows-index-wrapper">
          <h2>All Shows</h2>
          <button>
            <Link to="/shows/new">Add a new show</Link>
          </button>
          <br />
          <p>Total Shows: {shows.length}</p>
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
            {shows.map((show) => (
              <ShowListing show={show} key={show.id} />
            ))}
          </section>
        </section>
      )}
    </div>
  );
}

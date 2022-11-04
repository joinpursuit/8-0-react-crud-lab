import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllShows } from "../../api/fetch";
import ErrorMessage from "../errors/ErrorMessage";
import ShowListing from "./ShowListing";
import "./ShowsIndex.css";

export default function ShowsIndex() {
  const [loadingError, setLoadingError] = useState(false);

  const [shows, setShows] = useState([]); //shows collection to present to user
  const [allShows, setAllShows] = useState([]); // storage of all the shows
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
  }, []); // empty dependencies array wil cause useeffect to run only when  the component is initally mounted

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

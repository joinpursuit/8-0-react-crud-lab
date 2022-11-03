import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShowListing from "./ShowListing";
import ErrorMessage from "../errors/ErrorMessage";
import "./ShowsIndex.css";
import { getAllShows } from "../../api/fetch";

function filterShows(search, shows) {
  return shows.filter((show) =>
    show.title.toLowerCase().match(search.toLowerCase())
  );
}

export default function ShowsIndex() {
  const [loadingError, setLoadingError] = useState(false);
  const [shows, setShows] = useState([]);
  //*  day 2 setAllShows
  const [allShows, setAllShows] = useState([]);
  //* searchTitle
  const [searchTitle, setSearchTitle] = useState("");

  //* handle textChange
  const handleTextChange = (e) => {
    const title = e.target.value;
    const results = title.length ? filterShows(title, allShows) : allShows;
    setShows(results);
    setSearchTitle(title);
  };

  useEffect(() => {
    getAllShows()
      .then((res) => {
        setAllShows(res);
        setShows(res);
        setLoadingError(false);
      })
      .catch((err) => {
        console.log(err);
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
              //* uncomment searchTitle
              value={searchTitle}
              id="searchTitle"
              //* uncomment handleText
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

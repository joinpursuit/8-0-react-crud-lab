//! 1 allSHows 7.imported useEffect()
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//! 10
import ShowListing from "./ShowListing";
import ErrorMessage from "../errors/ErrorMessage";

import "./ShowsIndex.css";
// !8 imported all shows
import { getAllShows } from "../../api/fetch";

export default function ShowsIndex() {
  //!2 loading error state
  const [loadingError, setLoadingError] = useState(false);
  const [shows, setShows] = useState([]); //!6

  //! 9 UseEffect()
  useEffect(() => {
    getAllShows()
      .then((result) => {
        setShows(result);
        setLoadingError(false);
      })
      .catch((err) => {
        console.log(err);
        setLoadingError(true);
      });
  }, []);
  return (
    <div>
      {/* updated ternary to the loading err wich is false */}
      {
        //! 3 false
        loadingError ? (
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
              {/* //!12 <!-- ShowListing components --> */}
              {shows.map((show) => {
                return <ShowListing show={show} key={show.id} />;
              })}
            </section>
          </section>
        )
      }
    </div>
  );
}

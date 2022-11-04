import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import ErrorMessage from "../errors/ErrorMessage";

import "./ShowsIndex.css";

import { getAllShows } from "../../api/fetch";
import ShowListing from "./ShowListing";

// helper function (can't be used for other components when inside the ShowsIndex() function)
// this function will be called in the handleTextChange function. It will use the .match method to compare the search argument, which is what the user has inputted, with the shows argument, which will come from the allShows state. It will return an array with the shows that fit the criteria
function filterShows(search, shows) {
  return shows.filter((show) => {
    return show.title.toLowerCase().match(search.toLowerCase());
  });
}

export default function ShowsIndex() {
  const [loadingError, setLoadingError] = useState(false);
  const [shows, setShows] = useState([]);
  const [allShows, setAllShows] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  // This function is used in your JSX input below to grab the users input using the event object's target (the input's) value. Result variable checks to see if the string has a length and if so uses the filterShow function above to find moves containing that string. Otherwise it shows all of the shows. Notice that we set both the shows variable and the searchTitle variable with the result  of the result variable.
  function handleTextChange(event) {
    const title = event.target.value;
    const result = title.length ? filterShows(title, allShows) : allShows;
    setShows(result);
    setSearchTitle(title);
  }

  useEffect(() => {
    // this calls the function located in our fetch.js that will GET all the shows from our backend server.
    getAllShows()
      // 2nd '.then'; 1st one in fetch.js
      .then((response) => {
        // we set this variable so that we can handle our search in the future
        setAllShows(response);
        // we set this variable so that we have a list of all of the shows.
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
            {/* <!-- ShowListing components --> */}
            {shows.map((show) => {
              return <ShowListing show={show} key={show.id} />;
            })}
          </section>
        </section>
      )}
    </div>
  );
}

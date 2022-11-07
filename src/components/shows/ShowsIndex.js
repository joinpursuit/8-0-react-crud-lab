import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllShows } from "../../api/fetch";
import ErrorMessage from "../errors/ErrorMessage"; //a error componenet
import ShowListing from "./ShowListing"; //display of movies

import "./ShowsIndex.css";

export default function ShowsIndex() {
  //state for loading errors
  const [loadingError, setLoadingError] = useState(false);

  //state for only select shows to be filtered
  const [shows, setShows] = useState([]);

  //storage of all shows so we can filter them and show them all
  const [allShows, setAllShows] = useState([]);
  
  //state for user input 
  const [searchTitle, setSearchTitle] = useState("");

  // Inside the functional component
  //useEffect will get the a promis then response back from the api
  //set all shows and set shows accepts the response in the array
  //setLoadin error sets the initial state of false to false
  //tif there is an error catch setLoading error from state will toggle the state to true
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

  //filter shows needs to filter shows equal to a user's search
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
              // value={searchTitle}
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

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ShowListing from "./ShowListing";
import ErrorMessage from "../errors/ErrorMessage";
import "./ShowsIndex.css";
import { getAllShows } from "../../api/fetch";

export default function ShowsIndex() {
  // error handling
  const [loadingError, setLoadingError] = useState(false);

  // to render unordered list of shows to user on webpage. 
  const [shows, setShows] = useState([]);

  // original list of shows for reset after a search. used to save fetch into somewhere
  const [allShows, setAllShows] = useState([]);

  // user search input
  const [searchTitle, setSearchTitle] = useState("");

  // renders the list of shows after succesful fetch 
  useEffect(() => {
    getAllShows()
      .then((response) => {
        setShows(response);
        setAllShows(response);
        setLoadingError(false);
      })
      .catch((error) => {
        console.log(error);
        setLoadingError(true);
      });
  }, []);


  // handles the user text input for the search, the onChange prop triggers the function update the state based on the input and the newly updated state gets passed as the value for the input. 
  function handleTextChange (event) {
    const title = event.target.value;
    const result = title.length ? filterShows(title,allShows) : allShows;
    setSearchTitle (title);
    setShows(result);
  }

  // filter the shows with the .match() method. If a string matches with .match("string") it will return true. if it is false we will filter it out. toLowerCase() method is used to add uppercase input capability. 
  function filterShows(search,shows) {
    return shows.filter((show) => {
      return show.title.toLowerCase().match(search.toLowerCase());
    });
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

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ErrorMessage from '../errors/ErrorMessage';
import ShowListing from './ShowListing';

import './ShowsIndex.css';

import { getAllShows } from '../../api/fetch';
//! using the function outside of the export makes it re-usable in other components
//! declaring it inside of the export re-renders it every time on page load which is not ideal
function filterShows(search, shows) {
  return shows.filter((show) =>
    show.title.toLowerCase().match(search.toLowerCase())
  );
}

export default function ShowsIndex() {
  const [loadingError, setLoadingError] = useState(false);
  const [shows, setShows] = useState([]);
  //!day 2 code along with JD
  const [allShows, setAllShows] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  //!day 2 code along with JD
  function handleTextChange(e) {
    const title = e.target.value;
    const result = title.length ? filterShows(title, allShows) : allShows;
    setShows(result);
    setSearchTitle(title);
  }

  useEffect(() => {
    getAllShows()
      .then((response) => {
        //!day 2 code along with JD
        setAllShows(response);

        setShows(response);
        setLoadingError(false);
      })
      .catch((error) => {
        console.log(error);
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

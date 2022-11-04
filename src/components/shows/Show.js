import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
//! day 2 code along with JD
import { getOneShow, destroyShow } from '../../api/fetch';

import './Show.css';

import ErrorMessage from '../errors/ErrorMessage';

function Show() {
  const [show, setShow] = useState({});
  const [loadingError, setLoadingError] = useState(false);
  //! useParams returns a value of a key in an object, {id} is destructured
  const { id } = useParams();
  const navigate = useNavigate();

  function handleDelete(id) {
    destroyShow(id)
      .then(() => navigate('/shows'))
      .catch((err) => {
        setLoadingError(true);
        console.log(err);
      });
  }

  //! day 2 code along with JD
  //? useEffect can take state, functions and any small changes in the dependencies array
  useEffect(() => {
    getOneShow(id)
      .then((response) => {
        setShow(response);
        if (Object.keys(response).length === 0) {
          setLoadingError(true);
        } else {
          setLoadingError(false);
        }
      })
      .catch((err) => {
        setLoadingError(true);
      });
  }, [id]);
  return (
    <section className="shows-show-wrapper">
      <h2>{show.title}</h2>
      <section className="shows-show">
        {loadingError ? (
          <ErrorMessage />
        ) : (
          <>
            <aside>
              <p>
                <span>Duration:</span> {show.duration}
              </p>
              <p>
                <span>Listed Categories:</span> {show.listedIn}
              </p>
              <p>
                <span>Country:</span> {show.country}
              </p>
              <p>
                <span>Rating:</span> {show.rating}
              </p>
              <p>
                <span>Date Added:</span> {show.dateAdded}
              </p>
            </aside>
            <article>
              <p>{show.description}</p>
            </article>
            <aside>
              <button className="delete" onClick={() => handleDelete(show.id)}>
                Remove show
              </button>
              <Link to={`/shows/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </aside>
          </>
        )}
      </section>
    </section>
  );
}

export default Show;

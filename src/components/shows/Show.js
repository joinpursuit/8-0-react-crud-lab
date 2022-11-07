import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
// src/components/shows/Show.js
import "./Show.css";
// src/components/shows/Show.js
import { destroyShow, getOneShow } from "../../api/fetch";

import ErrorMessage from "../errors/ErrorMessage";

function Show() {
  const [show, setShow] = useState({});
  const [loadingError, setLoadingError] = useState(false);

  //de structure id from params
  const { id } = useParams();

  function handleDelete() {
    destroyShow(id)
      .then(() => navigate("/shows"))
      .catch((error) => {
        console.error(error);
        setLoadingError(true);
      });
  }

  //use effect to fetch the url of one movie with the id.
  //then that response is stored in show via state.
  //if the response object key pairs are empty then error via state is set to true
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
      .catch((error) => {
        setLoadingError(true);
      });
  }, [id]); //dependencey array !!!

  //use naviage is defined
  let navigate = useNavigate();
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

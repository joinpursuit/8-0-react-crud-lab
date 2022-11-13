import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getOneShow, destroyShow } from "../../api/fetch";
import "./Show.css";

import ErrorMessage from "../errors/ErrorMessage";

function Show() {
  const [show, setShow] = useState({});
  const [loadingError, setLoadingError] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    getOneShow(id)
      .then(res => {
        setShow(res);
        if (Object.keys(res).length === 0) setLoadingError(true);
        else setLoadingError(false);
      })
      .catch(error => {
        setLoadingError(true);
      });
  }, [id]);

  function handleDelete(id) {
    destroyShow(id)
    .then(() => navigate("/shows"))
    .catch(error => {
      console.error(error);
      setLoadingError(true);
    });
  }

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

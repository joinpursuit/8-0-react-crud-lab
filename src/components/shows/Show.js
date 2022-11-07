import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getOneFetch, destroyShow } from "../../api/fetch";
import "./Show.css";

import ErrorMessage from "../errors/ErrorMessage";

function Show() {
  const [show, setShow] = useState({});
  const [loadingError, setLoadingError] = useState(false);

  const { id } = useParams();
  // when show is deleted, want to send user back to shows index page -> useNavigate
  const navigate = useNavigate()

  function handleDelete(value) {
    destroyShow(value)
    .then(() => navigate("/shows"))
    .catch(err => setLoadingError(true))
  }

  // Object.keys to get an array of the object's key values. If the array's length is 0 (no keys), it is an empty object.
  useEffect(() => {
    getOneFetch(id, `shows`).then(respJson => {
      setShow(respJson)

      if(Object.keys(respJson).length === 0){
        setLoadingError(true)
      }
      else{
        setLoadingError(false)
      }
    })
    .catch(err => setLoadingError(true))
  }, [id])
  // use the id value in dependency array to fire whenever the selected show id value changes. -> id is optional param value :id

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
              <button className="delete" 
              // on click trigger DELETE fetch call
              onClick={() => handleDelete(show.id)}>
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

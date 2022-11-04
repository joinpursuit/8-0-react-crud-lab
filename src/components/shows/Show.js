import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { destroyShow, getOneShow } from "../../api/fetch";

import "./Show.css";

import ErrorMessage from "../errors/ErrorMessage";

function Show() {
  const [show, setShow] = useState({});
  const [loadingError, setLoadingError] = useState(false);

  // We are grabbing the parameter from the url address bar parameter. useParams is an object from which we are able to destructure the id key that we defined in App.js in a route.
  const { id } = useParams();
  const navigate = useNavigate();

  // the id for this function will come from the show piece of state which is loaded below in the useEffect. The function will be called in the Remove Show onClick handler below and passed the show.id from state. This will send the request to the backend server and remove the show from the data.
  function handleDelete(id) {
    destroyShow(id)
      .then(() => navigate("/shows"))
      .catch((error) => {
        console.error(error);
        setLoadingError(true);
      });
  }

  useEffect(() => {
    // this function loads the show using the id from the parameter given to us by the useParams above. From there we set the show variable using setShow. If a show is not returned in an array Object.keys. We set our loadingError to true so that we can let the user know nothing was found by rendering the ErrorMessage Component which is in the JSX below. We also use our catch to catch any other random errrors.
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
              {/* This show.id comes from the state after we retrieved our movie in the useEffect We will send it to the backend server where it will delete the show with that id */}
              <button className="delete" onClick={() => handleDelete(show.id)}>
                Remove show
              </button>
              {/* This id comes from the parameter where we destructured id from the useParams */}
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

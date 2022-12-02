import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { destroyShow, getOneShow } from "../../api/fetchMovies";



import "../shows/Show.css";

import ErrorMessage from "../errors/ErrorMessage";

function Movies() {
  const [movies, setMovies] = useState({});
  const [loadingError, setLoadingError] = useState(false);

  const { id } = useParams();
  let navigate = useNavigate();

  function handleDelete() {
    destroyShow(id)
      .then(() => navigate("/movies"))
      .catch((error) => {
        console.error(error);
        setLoadingError(true);
      });
  }
  useEffect(() => {
    getOneShow(id)
      .then((response) => {
        setMovies(response);
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
      <h2>{movies.title}</h2>
      <section className="shows-show">
        {loadingError ? (
          <ErrorMessage />
        ) : (
          <>
            <aside>
              <p>
                <span>Duration:</span> {movies.duration}
              </p>
              <p>
                <span>Listed Categories:</span> {movies.listedIn}
              </p>
              <p>
                <span>Country:</span> {movies.country}
              </p>
              <p>
                <span>Rating:</span> {movies.rating}
              </p>
              <p>
                <span>Date Added:</span> {movies.dateAdded}
              </p>
            </aside>
            <article>
              <p>{movies.description}</p>
            </article>
            <aside>
              <button className="delete" onClick={() => handleDelete(movies.id)}>
                Remove movie
              </button>
              <Link to={`/movies/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </aside>
          </>
        )}
      </section>
    </section>
  );
}

export default Movies;

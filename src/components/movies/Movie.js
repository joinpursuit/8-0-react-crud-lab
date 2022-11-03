import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import { destroyMovie, getOneMovie } from "../../api/fetch";

import "./Movie.css";

import ErrorMessage from "../errors/ErrorMessage";

function Movie() {
  const [movie, setMovie] = useState({});
  const [err, setErr] = useState(false);

  const { id } = useParams();

  const nav = useNavigate();

  function handleDel() {
    destroyMovie(id)
      .then(() => nav("/movies"))
      .catch((error) => {
        console.error(error);
        setErr(true);
      });
  }

  useEffect(() => {
    getOneMovie(id)
      .then((response) => {
        setMovie(response);
        if (Object.keys(response).length === 0) {
          setErr(true);
        } else {
          setErr(false);
        }
      })
      .catch((error) => {
        setErr(true);
      });
  }, [id]);

  return (
    <section className="movies-movie-wrapper">
      <h2>{movie.title}</h2>
      <section className="movies-movie">
        {err ? (
          <ErrorMessage />
        ) : (
          <>
            <aside>
              <p>
                <span>Duration:</span> {movie.duration}
              </p>
              <p>
                <span>Listed Categories:</span> {movie.listedIn}
              </p>
              <p>
                <span>Country:</span> {movie.country}
              </p>
              <p>
                <span>Rating:</span> {movie.rating}
              </p>
              <p>
                <span>Date Added:</span> {movie.dateAdded}
              </p>
            </aside>
            <article>
              <p>{movie.description}</p>
            </article>
            <aside>
              <button className="delete" onClick={() => handleDel(movie.id)}>
                Remove show
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

export default Movie;

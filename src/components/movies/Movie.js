import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import ErrorMessage from "../errors/ErrorMessage";

import { getOne, deleteItem } from "../../api/fetch";

import "./Movie.css";

export default function Movie() {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const deleteMovie = (id) => {
    deleteItem("movies", id)
      .then(() => navigate("/movies"))
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  useEffect(() => {
    getOne("movies", id)
      .then((res) => {
        setMovie(res);
        Object.keys(res).length < 1 ? setError(true) : setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [id]);

  return (
    <div>
      {error ? (
        <ErrorMessage />
      ) : (
        <article className="movie">
          <h2>{movie.title}</h2>
          <div className="movie-card">
            <section className="movie-details">
              <p>
                <span>Duration: </span>
                {movie.duration}
              </p>
              <p>
                <span>Listed Categories: </span>
                {movie.listedIn}
              </p>
              <p>
                <span>Country: </span>
                {movie.country}
              </p>
              <p>
                <span>Rating: </span>
                {movie.rating}
              </p>
              <p>
                <span>Date Added: </span>
                {movie.dateAdded}
              </p>
            </section>
            <section className="movie-description">
              <p>{movie.description}</p>
            </section>
            <section className="movie-links">
              <button onClick={() => deleteMovie(id)}>Remove Movie</button>
              <Link to={`/movies/${id}/edit/`}>
                <button>Edit</button>
              </Link>
            </section>
          </div>
        </article>
      )}
    </div>
  );
}

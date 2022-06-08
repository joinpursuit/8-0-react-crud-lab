import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Error from "../common/Error"

export default function Movie({ movies, handleDelete }) {
  const { id } = useParams();
//   console.log(id);
  const movie = movies.find((movie) => movie.id === id);
//   console.log(movie);
  const history = useHistory();

  const handleClick = () => {
    history.push("/movies");
  };

if (!movie) {
    return <Error/>
}
  return (
    <section class="shows-show-wrapper">
      <h2>{movie.title}</h2>
      <section class="shows-show">
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
          <button onClick={handleClick} class="delete">
            go back to Movies
          </button>

          <button value= {id} onClick={handleDelete} class="delete">
            Remove Movie
          </button>
        </aside>
      </section>
    </section>
  );
}

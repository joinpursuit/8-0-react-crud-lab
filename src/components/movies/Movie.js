import React from "react";
import { useHistory, useParams } from "react-router-dom";
import "./Movie.css";

export default function Movie({ movies }) {
  const { id } = useParams(); //> Matchs movie id selected
  const history = useHistory();

  const movie = movies.find((movie) => movie.id === id); //> we isolate the specified movie object
  const handleClick = () => {
    history.push("/movies");
  };

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
            <span>Date Added:</span> {movie.releaseYear}
          </p>
        </aside>
        <article>
          <p>{movie.description}</p>
        </article>
        <aside>
          <button onClick={handleClick} class="delete">
            Go back
          </button>
        </aside>
      </section>
    </section>
  );
}

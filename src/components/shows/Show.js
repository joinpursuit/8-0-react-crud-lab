import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Error from "../common/Error";
import "./Show.css";

export default function Show({ shows, handleDelete }) {
  const { id } = useParams();
  //useParams captures
  const history = useHistory();
  // /shows/chicken === const show = undefined
  const show = shows.find((show) => show.id === id);
  const handleClick = () => {
    history.push("/shows");
  };

  if (!show) {
    return <Error />;
  }

  return (
    <section class="shows-show-wrapper">
      <h2>{show.title}</h2>
      <section class="shows-show">
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
            <span>Date Added:</span> {show.releaseYear}
          </p>
        </aside>
        <article>
          <p>{show.description}</p>
        </article>
        <aside>
          <button onClick={handleClick} class="goback">
            {" "}
            Go Back{" "}
          </button>
        </aside>
        <aside>
          <button value={id} onClick={handleDelete} class="delete">
            Delete
          </button>
        </aside>
      </section>
    </section>
  );
}

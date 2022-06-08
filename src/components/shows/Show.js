import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Error from "../common/Error";
import ShowsIndex from "./ShowsIndex";

export default function Show({ shows, handleDelete }) {
  const { id } = useParams();
  //   console.log(id);

  const show = shows.find((show) => show.id === id);
//   console.log(show);

  const history = useHistory();
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
            <span>Date Added:</span> {show.dateAdded}
          </p>
        </aside>
        <article>
          <p>{show.description}</p>
        </article>
        <aside>
          <button onClick={handleClick} class="delete">
            go back to shows
          </button>
          <button value={id} onClick={handleDelete} class="delete">
            Remove show
          </button>
        </aside>
      </section>
    </section>
  );
}

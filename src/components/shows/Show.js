import React from "react";
import { useParams, useHistory } from "react-router-dom";
//import "./Show.css";
import Error from "../common/Error.js";

export default function Show({ shows, handleDelete }) {
  const { id } = useParams();
  const history = useHistory();
  //const navigate = useNavigate() --- functional
  // const show = undefined - if id does not match
  const show = shows.find((show) => show.id === id);
  const handleClick = () => {
    history.push("/shows");
    //navigate("/shows")
  };
  // lets make some error handling first!
  if (!show) {
    return <Error />;
  }
  return (
    <section className="shows-show-wrapper">
      <h2>{show.title}</h2>
      <section className="shows-show">
        <aside>
          <p>
            <span>Duration:</span> {show.duration}
          </p>
          <p>
            <span>Listed Categories:</span> {show.listedIn}
          </p>
          <p>
            <span>Country:</span>
            {show.country}
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
          <button onClick={handleClick} class="history">
            go back
          </button>
        </aside>
        <aside>
          <button value={id} onClick={handleDelete} className="delete">
            Remove show
          </button>
        </aside>
      </section>
    </section>
  );
}
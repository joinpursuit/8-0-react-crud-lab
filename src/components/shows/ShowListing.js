import React from "react";
import { Link, useParams } from "react-router-dom";
import "./ShowListing.css";

export default function ShowListing({ show }) {
  const { title, description, duration, id, listedIn } = show;
  console.log(show);

  return (
    <article className="show">
      <h3 class="title">
        <Link to={`/shows/${id}`}>{title}</Link>
      </h3>
      <p className="description">{description}</p>
      <aside className="details">
        <p>
          <span>Listed Categories:</span> {listedIn}
        </p>
        <p>
          <span>Duration:</span> {duration}
        </p>
      </aside>
    </article>
  );
}

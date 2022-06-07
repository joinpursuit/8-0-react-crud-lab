import React from "react";
import { useParams, useHistory } from "react-router-dom";

export default function Show(shows) {
  const { id } = useParams;
  const show = shows.find((show) => show.id === id)
  const handleClick = () => {
      history.pushState("/shows")
  }
  return (
    <section class="shows-show-wrapper">
      <h2>REPLACE_WITH_TITLE</h2>
      <section class="shows-show">
        <aside>
          <p>
            <span>Duration:</span> REPLACE_WITH_DURATION
          </p>
          <p>
            <span>Listed Categories:</span> REPLACE_WITH_LISTED_CATEGORIES
          </p>
          <p>
            <span>Country:</span> REPLACE_WITH_COUNTRY
          </p>
          <p>
            <span>Rating:</span> REPLACE_WITH_RATING
          </p>
          <p>
            <span>Date Added:</span> REPLACE_WITH_DATE_ADDED
          </p>
        </aside>
        <article>
          <p>REPLACE_WITH_DESCRIPTION</p>
        </article>
        <aside>
          <button class="delete">Remove show</button>
        </aside>
      </section>
    </section>
  );
}

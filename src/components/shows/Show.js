import React from "react";
import {useParams, useHistory} from "react-router-dom";
import "./Show.css"

export default function Show({shows}) {
    const {id} = useParams();
    const history = useHistory();
    const show = shows.find(show => show.id === id);
    
    //takes you back to the previous page --> replaced with useNavigate
    const handleClick = () =>{
        history.push("/shows")
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
          <button class="delete" onClick={handleClick}>Remove show</button>
        </aside>
      </section>
    </section>
  );
}

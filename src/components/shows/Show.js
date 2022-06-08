import React from 'react';
import ErrorMessage from "../common/ErrorMessage";
import { useHistory, useParams } from 'react-router-dom';
import './Show.css';

export default function Show({shows,handleDelete}) {
    const { id } = useParams(); //> Matchs show id selected
    const history = useHistory(); 

    const show = shows.find((show) => show.id === id); //> we isolate the specified show object
    const handleClick = () => {
        history.push("/shows"); 
    };
    
    return (
      <section className='shows-show-wrapper'>
          {!show ? (
        <ErrorMessage />
      ) : (<>
        <h2>{show.title}</h2>
        <section className='shows-show'>
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
            <button value={id} onClick={handleClick} className='delete'>
              Go back
            </button>
          </aside>
          <aside>
            <button value={id} onClick={handleDelete} className='delete'>
              Remove show
            </button>
          </aside>
        </section>
        </>
      )}
      </section>
    );
}

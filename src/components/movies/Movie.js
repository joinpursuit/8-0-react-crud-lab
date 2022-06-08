import React from 'react';
import ErrorMessage from "../common/ErrorMessage";
import { useHistory, useParams } from 'react-router-dom';
import './Movie.css';

export default function Show({movies,handleDelete}) {
    const { id } = useParams(); //> Matchs show id selected
    const history = useHistory(); 

    const movie = movies.find((movie) => movie.id === id); //> we isolate the specified show object
    const handleClick = () => {
        history.push("/movies"); 
    };
    
    return (
      <section className='shows-show-wrapper'>
          {!movie ? (
        <ErrorMessage />
      ) : (<>
        <h2>{movie.title}</h2>
        <section className='shows-show'>
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
            <button value={id} onClick={handleClick} className='delete'>
              Go back
            </button>
          </aside>
          <aside>
            <button value={id} onClick={handleDelete} className='delete'>
              Remove movie
            </button>
          </aside>
        </section>
        </>
      )}
      </section>
    );
}

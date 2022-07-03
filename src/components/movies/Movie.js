import React from 'react'
import {useParams,useHistory} from 'react-router-dom'
import './Movie.css'
import Error from '../common/Error';


export default function Movie({ movies, handleDelete }) {
  const { id } = useParams()
  const movie = movies.find((movie) => movie.id === id)
  const history = useHistory()

  const handleClick = () => {
    history.push('/movies')
  }

  return (
    <section className="shows-show-wrapper">
      {!movie ? (<Error />) : (
        <>
      <h2>{movie.title}</h2>
      <section className="shows-show">
        <aside>
          <p>
            <span>Duration:</span> {movie.duration}
          </p>
          <p>
            <span>Listed Categories:</span> {movie.listedIn}
          </p>
          <p>
            <span>Country:</span>
            {movie.country}
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
              <button value={id} onClick={handleDelete} class="delete">Remove movie</button>
        </aside>
        <aside>
          <button onClick={handleClick} class="goback">
            Go Back
          </button>
        </aside>
      </section>
    </>
  
)}
    </section>
  );

}

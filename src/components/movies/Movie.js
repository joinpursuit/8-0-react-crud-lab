import React from 'react'
import { useParams, useHistory } from 'react-router-dom';

export default function Movie({movies}) {
    const { id } = useParams()
    const history = useHistory()
    const movie = movies.find((movie) => movie.id === id)
    console.log(movie)
    const handleClick = () => {
        history.push('/movies')
    }
    return (
        <section class="movies-movie-wrapper">
      <h2>{movie.title}</h2>
      <section class="movies-movie">
        <aside>
          <p><span>Duration:</span> {movie.duration}</p>
          <p><span>Listed Categories:</span> {movie.listedIn}</p>
          <p><span>Country:</span> {movie.country}</p>
          <p><span>Rating:</span> {movie.rating}</p>
          <p><span>Date Added:</span> {movie.releaseYear}</p>
        </aside>
        <article>
          <p>{movie.description}</p>
        </article>
        <aside><button onClick={handleClick} class="delete">Remove movie</button></aside>
      </section>
    </section>
      )
    }
    

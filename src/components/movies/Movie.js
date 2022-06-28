import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Error from '../common/Error'

export default function Movie({movies, handleDelete}) {
    const {id} = useParams()
    const history= useHistory()
    const movie = movies.find((movie) => movie.id === id)
    const handleClick = () => {
        history.push("/movies")
    }
    if(!movie){
      return <Error />
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
      <p><span>Date Added:</span>{movie.dateAdded}</p>
    </aside>
    <article>
      <p>{movie.description}</p>
    </article>
    <aside><button onClick={handleClick} class="back">Go Back</button></aside>
    <aside><button onClick={handleDelete} value={id}class="delete">Delete</button></aside>
  </section>
</section>
  )
}
import React from 'react'
import {Link} from "react-router-dom"

export default function MovieListing({ movie }) {
    const {title, description, duration, listedIn, id} = movie
    console.log(movie)
  return (
    <article className="movies">
  <h3 class="title">
    <Link to={`/movies/${id}`}>{title}</Link>
  </h3>
  <p className="description">{description}</p>
  <aside className="details">
    <p><span>Listed Categories:</span> { listedIn }</p>
    <p><span>Duration:</span> {duration}</p>
  </aside>
</article>
  )
}
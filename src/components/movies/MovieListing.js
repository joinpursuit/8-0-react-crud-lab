import React from 'react'
import {Link} from "react-router-dom"
import '../movies/MovieListing.css'

export default function movieListing({ movie }) {
    const {title, description, duration, listedIn, id} = movie
  return (
    <article className="movie">
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

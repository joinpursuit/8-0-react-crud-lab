import React from "react"
import { Link } from "react-router-dom"

function MoviesListing({ movie }) {
  return (
    <article className="movie">
      <h1>Movie Listing</h1>
      <h3 className="title">
        {/* matching the movie.id with the movie title and making the title clickable */}
        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
      </h3>
      {/* once match is confine bringing out the details/description of the movie */}
      <p className="description">{movie.description}</p>
      <aside className="details">
        <p>
          <span>Listed Categories: </span>
          {movie.listedIn}
        </p>
        <p>
          <span>Duration: </span>
          {movie.duration}
        </p>
        <p>
          <span>Year released: </span>
          {movie.releaseYear}
        </p>
      </aside>
    </article>
  )
}

export default MoviesListing

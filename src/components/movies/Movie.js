import React from "react"
import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"

import { getOneMovie, destroyMovie } from "../../api/fetch"
import ErrorMessage from "../errors/ErrorMessage"

function Movie() {
  const [movie, setMovie] = useState({})
  const [loadingError, setLoadingError] = useState(false)

  const { id } = useParams()
  const navigate = useNavigate()

  function handleDelete(id) {
    destroyMovie(id)
      .then(() => navigate(`/movies`))
      .catch((err) => console.log(err))
    setLoadingError(true)
  }

  useEffect(() => {
    getOneMovie(id)
      .then((res) => {
        setMovie(res)
        if (Object.keys(res).length === 0) setLoadingError(true)
        else setLoadingError(false)
      })
      .catch((err) => setLoadingError(true))
  }, [id])

  return (
    <section className="movie-movie-wrapper">
      <h2>{movie.title}</h2>
      <section className="movie-movie">
        {loadingError ? (
          <ErrorMessage />
        ) : (
          <>
            <aside>
              <p>
                <span>Duration: {movie.duration}</span>
              </p>
              <p>
                <span>Listed Categories: </span>
                {movie.listedIn}
              </p>
              <p>
                <span>Country: {movie.country}</span>
              </p>
              <p>
                <span>Ratings: </span>
                {movie.rating}
              </p>
              <p>
                <span>Date Added: </span>
                {movie.dateAdded}
              </p>
              <p>
                <span> Year released: </span>
                {movie.releaseYear}
              </p>
            </aside>
            <article>
              <h2>Description:</h2>
              <p>{movie.description}</p>
            </article>
            <aside>
              <button className="delete" onClick={() => handleDelete(movie.id)}>
                Remove movie
              </button>
              <Link to={`/movies/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </aside>
          </>
        )}
      </section>
    </section>
  )
}

export default Movie

import React from "react"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { editMovie, getOneMovie } from "../../api/fetch"

function MoviesEditForm() {
  let { id } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState({
    type: "",
    title: "",
    country: "",
    dateAdded: "",
    description: "",
    duration: "",
    listedIn: "",
    rating: "",
    releaseYear: "",
  })

  function handleSubmit(event) {
    event.preventDefault()
    editMovie(id, movie)
      .then(() => {
        navigate(`/movie/${id}`)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  function handleTextChange(e) {
    setMovie({
      ...movie,
      [e.target.id]: e.target.value,
    })
  }

  useEffect(() => {
    getOneMovie(id)
      .then((response) => {
        setMovie(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Movie title">
          Movie Title:
          <input
            type="text"
            id="title"
            value={movie.title}
            onChange={handleTextChange}
          />
        </label>
        <label htmlFor="description">
          Description:
          <input
            type="text"
            id="description"
            value={movie.description}
            onChange={handleTextChange}
          />
        </label>
        <label htmlFor="type">
          Type:
          <input
            type="text"
            id="type"
            value={movie.type}
            onChange={handleTextChange}
          />
        </label>
        <label htmlFor="rating">
          Rating:
          <input
            type="text"
            id="rating"
            value={movie.rating}
            onChange={handleTextChange}
          />
        </label>
        <label htmlFor="Listed in ">
          Listed In:
          <input
            type="text"
            id="listedIn"
            value={movie.listedIn}
            onChange={handleTextChange}
          />
        </label>
        <label htmlFor="duration">
          Duration:
          <input
            type="text"
            id="duration"
            value={movie.duration}
            onChange={handleTextChange}
          />
        </label>
        <label htmlFor="release Year">
          Release Year:
          <input
            type="text"
            id="releaseYear"
            value={movie.releaseYear}
            onChange={handleTextChange}
          />
        </label>
        <label htmlFor="country">
          Country:
          <input
            type="text"
            id="country"
            value={movie.country}
            onChange={handleTextChange}
          />
        </label>
        <label htmlFor="date added">
          Date added:
          <input
            type="text"
            id="date added"
            value={movie.dateAdded}
            onChange={handleTextChange}
          />
        </label>
        <input type="submit" />
      </form>
    </>
  )
}

export default MoviesEditForm

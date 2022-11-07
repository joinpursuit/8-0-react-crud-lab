import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createMovie } from "../../api/fetch"

function MoviesNewForm() {
  const navigate = useNavigate()
  const [movie, setMovie] = useState({
    type: "",
    title: "",
    country: "",
    dateAdded: "",
    description: "",
    duration: "",
    listenIn: "",
    rating: "",
    releaseYear: "",
  })
  function handleSubmit(e) {
    e.preventDefault()
    createMovie(movie)
      .then((res) => navigate(`/movies/${res.id}`))
      .catch((err) => console(err))
  }
  function handleTextChange(e) {
    setMovie({
      ...movie,
      [e.target.id]: e.target.value,
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="type">
        Type:
        <input
          type="text"
          id="type"
          value={movie.type}
          onChange={handleTextChange}
        />
      </label>
      <label htmlFor="title">
        Title:
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
      <label htmlFor="country">
        Country:
        <input
          type="text"
          id=""
          value={movie.country}
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
      <label htmlFor="listed in">
        Listed In:
        <input
          type="text"
          id="listedIn"
          value={movie.listenIn}
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
      <label htmlFor="release year">
        Release Year:
        <input
          type="text"
          id="releaseYear"
          value={movie.releaseYear}
          onChange={handleTextChange}
        />
      </label>
      <label htmlFor="dateAdded">
        Date Added:
        <input
          type="text"
          id="dateAdded"
          value={movie.dateAdded}
          onChange={handleTextChange}
        />
      </label>
      <br />
      <input type="submit" />
    </form>
  )
}

export default MoviesNewForm

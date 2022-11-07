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
          <input type="text" id="title" value={movie.title} onChange={handleTextChange}/>
        </label>
        <label htmlFor="description">
          Description:
          <input type="text" id="description" value={movie.description} onChange={handleTextChange}/>
        </label>
        <label htmlFor="country">
          Country:
          <input type="text" id="" value={movie.country} onChange={handleTextChange}/>
        </label>
        <label htmlFor="">
      
          <input type="text" id="" value={} onChange={handleTextChange}/>
        </label>
        <label htmlFor="">
          <input type="text" id="" value={} onChange={handleTextChange}/>
        </label>
        <label htmlFor="">
          <input type="text" id="" value={} onChange={handleTextChange}/>
        </label>
        <label htmlFor="">
          <input type="text" id="" value={} onChange={handleTextChange}/>
        </label>
        <label htmlFor="">
          <input type="text" id="" value={} onChange={handleTextChange}/>
        </label>
        <br/>
         <input type="submit"/>
      </form>
    
  )
}

export default MoviesNewForm

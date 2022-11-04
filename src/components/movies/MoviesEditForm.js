import React from "react"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react"

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
  function handleTextchange(e) {
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
  }, [])
  return (
    <div>
      <h1>form</h1>
    </div>
  )
}

export default MoviesEditForm

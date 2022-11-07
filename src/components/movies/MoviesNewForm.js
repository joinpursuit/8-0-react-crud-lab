import React from "react"
import { useState } from "react"

function MoviesNewForm() {
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

  return <div></div>
}

export default MoviesNewForm

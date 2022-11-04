import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { getOneMovie } from "../../api/fetch"
import ErrorMessage from "../errors/ErrorMessage"

function Movie() {
  const [movie, setMovie] = useState({})
  const [loadingError, setLoadingError] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    getOneMovie(id)
      .then((res) => {
        setMovie(res)
        if (Object.keys(res).length === 0) setLoadingError(true)
        else setLoadingError(false)
      })
      .catch((err) => setLoadingError(true))
  }, [id])

  return <div></div>
}

export default Movie

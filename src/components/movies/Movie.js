import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import ErrorMessage from "../errors/ErrorMessage";
import { destroyMovie, getOneMovie } from "../../api/fetch"
import "./Movie.css"

function Movie (){
    const [loadingError, setLoadingError] = useState(false)
    const [movie, setMovie] = useState({})

    const { id } = useParams()
    const navigate = useNavigate()

    const handleDelete = (id) => {
        destroyMovie(id)
            .then(() => navigate("/movies"))
            .catch(err => {
                console.log(err)
                setLoadingError(true)
            })
    }

    useEffect(() => {
        getOneMovie(id)
            .then(res => {
                setMovie(res)
                if(Object.keys(res).length === 0) setLoadingError(true)
                else setLoadingError(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingError(true)
            })
    }, [id])

    return (
        <section className="movies-movie-wrapper">
            <h2>{movie.title}</h2>
            <section className="movies-movie">
                {
                    loadingError ? (
                        <ErrorMessage /> 
                    ) : (
                        <>
                            <aside>
                                <p>
                                    <span>Duration: </span>{movie.duration}
                                </p>
                                <p>
                                    <span>Listed Categories: </span>{movie.listedIn}
                                </p>
                                <p>
                                    <span>Country: </span>{movie.country}
                                </p>
                                <p>
                                    <span>Rating: </span>{movie.rating}
                                </p>
                                <p>
                                    <span>Date Added: </span>{movie.dateAdded}
                                </p>
                            </aside>
                            <article>
                                <p>{movie.description}</p>
                            </article>
                            <aside>
                                <button className="delete" onClick={() => handleDelete(movie.id)}>Remove show</button>
                                <button>Edit</button>
                            </aside>
                        </>
                    )

                }
            </section>
        </section>
    )
}

export default Movie
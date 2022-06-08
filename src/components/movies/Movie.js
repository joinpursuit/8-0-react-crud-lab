import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './Movie.css';
import Error from '../common/Error.js'

export default function Movie({ movies, handleDeleteMovie }) {
    const { id } = useParams()
    const history = useHistory();

    const movie = movies.find((movie) => movie.id === id);
    const handleClick = () => {
        history.push("/movies")
    }

    return (
        <section class="movies-movie-wrapper">
            {!movie ? (
                <Error />
            ) : (
                <>
                    <h2>{movie.title}</h2>
                    <section class="movies-movie">
                        <aside>
                            <p><span>Duration:</span> {movie.duration}</p>
                            <p><span>Listed Categories:</span> {movie.listedIn}</p>
                            <p><span>Country:</span> {movie.country}</p>
                            <p><span>Rating:</span> {movie.rating}</p>
                            <p><span>Date Added:</span> {movie.dateAdded}</p>
                        </aside>
                        <article>
                            <p>{movie.description}</p>
                        </article>
                        <aside>
                            <button onClick={handleClick} className="goBack">Go Back</button>
                        </aside>
                        <aside>
                            <button value={id} onClick={handleDeleteMovie} className="delete">Delete</button>
                        </aside>
                    </section>

                </>
            )}
        </section>
    )
}

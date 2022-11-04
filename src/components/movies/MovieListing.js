import React from 'react';
import { Link } from 'react-router-dom'
import "./MovieListing.css"

function MovieListing({ movie }) {
    return (
        <article className="movie">
            <h3 className="title">
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </h3>
            <p className="decription">{movie.description}</p>
            <aside className='details'>
                <p>
                    <span>Listed Categories: </span>
                    {movie.listedIn}
                </p>
                <p>
                    <span>Duration: </span>
                    {movie.duration}
                </p>
            </aside>
        </article>
    );
}

export default MovieListing;
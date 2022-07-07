import React from 'react';
import { Link } from 'react-router-dom';
import './MovieListing.css';


export default function MovieListing({movie}) {
    console.log(movie)
    const { id, description, duration, title, listedIn } = movie;
    return (
        <article className="movie">
            <h3 className="title">
                <Link to={`/movies/${id}`}>{title}</Link>
            </h3>
            <p className="description">Description: {description}</p>
            <aside className="details">
                <p><span>Listed Categories:</span> {listedIn}</p>
                <p><span>Duration:</span> {duration}</p>
            </aside>
        </article>
    )
}
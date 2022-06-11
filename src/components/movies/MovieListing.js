import React from "react";
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom"

export default function MovieListing({movie, id, title, description, duration, listedIn, rating, key }){

    return (
        <article className="movie">
            <h3 className="title">
                <Link to={`/movies/${id}`}>{title}</Link>
            </h3>
            <p className="description">{description}</p>
            <aside className="details">
                <p>
                    <span>Listed Categories:</span>{listedIn}
                </p>
                <p>
                    <span>Duration:</span> {duration}
                </p>
            </aside>
        </article>

    )
}


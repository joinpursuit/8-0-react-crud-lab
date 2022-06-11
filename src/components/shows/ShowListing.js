import React from "react";
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

export default function ShowListing({show, id, title, description, duration, listedIn, rating, key}) {
    // console.log(show)
    // console.log(title)

    return (
        <article className="show">
            <h3 className="title">
                <Link to={`/shows/${id}`}>{title}</Link>
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
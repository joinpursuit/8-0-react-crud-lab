import React from 'react';
import { Link } from 'react-router-dom';
import './ShowListing.css';


export default function ShowListing({show}) {
    const { id, description, duration, title, listedIn } = show;
    return (
        <article className="show">
            <h3 className="title">
                <Link to={`/shows/${id}`}>{title}</Link>
            </h3>
            <p className="description">Description: {description}</p>
            <aside className="details">
                <p><span>Listed Categories:</span> {listedIn}</p>
                <p><span>Duration:</span> {duration}</p>
            </aside>
        </article>
    )
}


import React from 'react';
import { Link } from 'react-router-dom';

function MovieListing({title, description, category, id, rating, releaseYear }) {
    return (
       <article className = "show">
            
            <h3 className = "title">
                <Link to = {`/movies/${id}`}>{title}</Link>
            </h3>
            
            <p className = 'description'>{description}</p>

            <aside className= 'details'>
                <p>
                    <span>Categories: </span>
                    {category}
                </p>
                <p>
                    <span>Rating: </span>
                    {rating}
                </p>
                <p>
                    <span>Released: </span>
                    {releaseYear}
                </p>
            </aside>

        </article> 
    );
}

export default MovieListing;
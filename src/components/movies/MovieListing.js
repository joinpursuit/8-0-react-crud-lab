import React from 'react';
import { Link } from 'react-router-dom';

function MovieListing({title, description, category, id, rating }) {
    return (
       <article className = "show">
            
            <h3 className = "title">
                <Link to = {`/shows/${id}`}>{title}</Link>
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
            </aside>

        </article>

         
    );
}

export default MovieListing;
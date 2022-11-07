import React from 'react';
import { Link } from 'react-router-dom';
import "../shows/ShowListing.css"

function MediaListing({title, description, listedIn, duration, id, endpoint }) {
    return (
        <article className = "show">
            
            <h3 className = "title">
                <Link to = {`/${endpoint}/${id}`}>{title}</Link>
            </h3>
            
            <p className = 'description'>{description}</p>

            <aside className= 'details'>
                <p>
                    <span>Listed Categories: </span>
                    {listedIn}
                </p>
                <p>
                    <span>Duration: </span>
                    {duration}
                </p>
             
            </aside>

        </article> 
    );
}

export default MediaListing;
import React from 'react';
import { Link } from 'react-router-dom';


function MovieListing({movie}) {
    return (
        <article className="show">
      <h3 className="title">
        {/* Link changes the url  */}
        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
      
      </h3>
      <p className="description">{movie.description}</p>
      <aside className="details">
        <p>
          <span>Listed Categories:</span>
          {movie.listedIn}
        </p>
        <p>
          <span>Duration:</span> {movie.duration}
        </p>
      </aside>
    </article>
    );
}

export default MovieListing;
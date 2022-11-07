import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getOneMovie, destroyMovie } from '../../api/fetch';

import './Movie.css';
import ErrorMessage from '../errors/ErrorMessage';

function Movie() {
    const [movie, setMovie] = useState({});
    const [error, setError] = useState(false);
  
    const { id } = useParams();
    const navigate = useNavigate();
  
    function handleDelete(id) {
      destroyMovie(id).then(() => {
        navigate('/movies').catch((err) => {
          setError(true);
          console.log(err);
        });
      });
    }
  
    useEffect(() => {
      getOneMovie(id)
        .then((response) => {
          setMovie(response);
          if (Object.keys(response).length === 0) {
            setError(true);
          } else {
            setError(false);
          }
        })
        .catch((err) => {
          setError(true);
        });
    }, [id]);
  
    return (
      <section className="movies-movie-wrapper">
        <h2>{movie.title}</h2>
        <section className="movies-movie">
          {error ? (
            <ErrorMessage />
          ) : (
            <>
              <aside>
                <p>
                  <span>Duration:</span> {movie.duration}
                </p>
                <p>
                  <span>Listed Categories:</span> {movie.listedIn}
                </p>
                <p>
                  <span>Country:</span> {movie.country}
                </p>
                <p>
                  <span>Rating:</span> {movie.rating}
                </p>
                <p>
                  <span>Date Added:</span> {movie.dateAdded}
                </p>
              </aside>
              <article>
                <p>{movie.description}</p>
              </article>
              <aside>
                <button className="delete" onClick={() => handleDelete(movie.id)}>
                  Remove Movie
                </button>
                <Link to={`/movies/${id}/edit`}>
                  <button>Edit</button>
                </Link>
              </aside>
            </>
          )}
        </section>
      </section>
    );
}

export default Movie;
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getOneMovie, destroyMovie } from '../../api/fetch.js';
import "./MoviesShowOne.css";
import ErrorMessage from "../errors/ErrorMessage";

export default function MoviesShowOne() {
  const [movie, setMovie] = useState({});
  const [loadingError, setLoadingError] = useState(false);

  // Es un hook que permite obtener los valores de los URL Params actuales 
  // movies/:id... extrae el id (u otras variables) que se encuentra en el URL 
  
  const { id } = useParams();
  const navigate = useNavigate()



  function handleDelete(id) { 
     destroyMovie(id)
      .then(data => { 
        navigate('/movies')
      })
  }
  
  useEffect(() => {
    getOneMovie(id)
      .then(movieData => {
        setMovie(movieData)
      })
    .catch(()=> setLoadingError(true))
  }, [id])

  return (
    <section className="movies-movie-wrapper">
      <h2>{movie.title}</h2>
      <section className="movies-movie">
        {loadingError ? (
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
                Remove movie
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


//showing a single movie listing
import { Link, useParams, useNavigate } from "react-router-dom";
// import "./shows/Show.css";
import { useState, useEffect } from "react";
import { getOneMovie, destroyMovie } from "../../api/fetch";
import ErrorMessage from "../errors/ErrorMessage";
import MoviesIndex from "./MoviesIndex";



export default function Movie() {

const [movie, setMovie] = useState({})
const [loadingError, setLoadingError] = useState(false);

  //de structure id from params
  const { id } = useParams();
    let navigate = useNavigate();

  function handleDelete() {
    destroyMovie(id)
      .then(() => navigate("/movies"))
      .catch((error) => {
        console.error(error);
        setLoadingError(true);
      });
  }

  useEffect(() => {
    getOneMovie(id)
      .then((response) => {
        setMovie(response);
        if (Object.keys(response).length === 0) {
          setLoadingError(true);
        } else {
          setLoadingError(false);
        }
      })
      .catch((error) => {
        setLoadingError(true);
      });
  }, [id]); //dependencey array !!!


  return (
 <section className="shows-movie-wrapper">
<h2>{movie.title}</h2>
<section className="shows-movie">
    {loadingError ? (<ErrorMessage />) : (
        <>
        <aside>
            <p><span>Duration:</span>{movie.duration}</p>
            <p><span>Listed Categories:</span>{MoviesIndex.listedIn}</p>
            <p><span>Country:</span>{movie.country}</p>
            <p><span>Rating:</span> {movie.rating}</p>
            <p><span>Date Added:</span> {movie.dateAdded}
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

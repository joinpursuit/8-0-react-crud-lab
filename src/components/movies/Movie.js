import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getByMovieId, deleteMovie } from '../../api/fetch';
import ErrorMessage from '../errors/ErrorMessage';


function Movie(props) {
/* 
    -create newfetch function based on id -> useEffect
    -useParams to pull url endpoint from link to value
    - declare state to hold returned (single movie) obj
    - error guard clause
    - delete fetch function
    */
    
    // Declare state for single movie data -> obj {}
    const [thisMovie, setThisMovie] = useState({})
    // Declare state for error
    const [error, setError] = useState(false)
    // variable for useParam
    const {movieId} = useParams()
    // variable for useNavigate()
    const navigate = useNavigate()

    // onClick function for delete movie
    function handleDelete(value) {
        deleteMovie(value)
        .then(() => navigate("/movies"))
        .catch(err => setError(true))
    }


   /*  useEffect to call fetch by id on page load 
        -> use param variable as arg for fetch 
        -> dependency array based on change in movieId (param)  */
    useEffect(() => {
        getByMovieId(movieId)
        .then(respJson =>{
            setThisMovie(respJson)

            if(Object.keys(respJson).length === 0){
                setError(true)
              }
              else{
                setError(false)
              }
        })
        .catch(err => setError(true))
    }, [movieId]) 

    return (
        <section className="shows-show-wrapper">
            
            <h2>{thisMovie.title}</h2>
            
            <section className="shows-show">
                {
                    error? <ErrorMessage /> :
                    <>
                    <aside>
                        <p>
                            <span>Country: </span>
                            {thisMovie.country ? thisMovie.country : `Unknown`}
                        </p>
                        <p>
                            <span>Rating: </span>
                            {thisMovie.rating}
                        </p>
                        <p>
                            <span>Released: </span>
                            {thisMovie.releaseYear}
                        </p>
                    </aside>

                    <article>
                        <p>{thisMovie.description}</p>
                    </article>

                    {/* aside with delete button and edit link */}
                    <aside>
                        <button className = 'delete'
                        onClick = {() => {handleDelete(movieId)}}>Remove Movie
                        </button>
                        
                        <Link to = {`/movies/${movieId}/edit`}>
                            <button>Edit</button>
                        </Link>
                    </aside>
                    </>
            }
            </section>

        </section>
    )
    
}

export default Movie;
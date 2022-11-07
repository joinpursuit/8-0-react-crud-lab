import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getOneFetch, deleteMedia } from '../../api/fetch';
import DisplayIndividualInfo from '../reusedComponents/DisplayIndividualInfo';


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
    function handleDelete() {
        deleteMedia(movieId, `movies`)
        .then(() => navigate("/movies"))
        .catch(err => setError(true))
    }


   /*  useEffect to call fetch by id on page load 
        -> use param variable as arg for fetch 
        -> dependency array based on change in movieId (param)  */
    useEffect(() => {
        getOneFetch(movieId, `movies`)
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
        <DisplayIndividualInfo
        dataVar = {thisMovie} 
        errorVar ={error} 
        paramVar = {movieId}
        deleteFunction ={handleDelete}
        endpoint = {`movies`} />
        
    )
    
}

export default Movie;
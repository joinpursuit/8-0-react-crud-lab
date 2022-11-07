import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Form from '../reusedComponents/Form';
import { editFormSubmitHandle, updateMedia, getOneFetch } from '../../api/fetch';
import ErrorMessage from '../errors/ErrorMessage';


function EditMovieForm(props) {
    const [editMovie, setEditMovie] = useState({
        type: "",
        title: "",
        country: "",
        dateAdded: "",
        releaseYear: "",
        rating: "",
        duration: "",
        listedIn: "",
        description: "",
         })

    const {movieId} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getOneFetch(movieId, `movies`)
        .then(resp => setEditMovie(resp))
        .catch(err => <ErrorMessage /> )
    }, [movieId])


    return (
        <Form 
        submitFunction = {editFormSubmitHandle}
        fetchFunction = {updateMedia}
        stateVar = {editMovie}
        setStateFunction = {setEditMovie}
        endpoint = {`movies`}
        navigateVar= {navigate}
        paramVar = {movieId}
    />
    );
}

export default EditMovieForm;
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Form from '../reusedComponents/Form';
import { editFormSubmitHandle, updateMedia, getOneFetch } from '../../api/fetch';


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
        .catch(err => console.log(err))
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
        key = {movieId}
    />
    );
}

export default EditMovieForm;
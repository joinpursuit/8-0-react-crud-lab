import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Movie from './Movie';
import Form from '../reusedComponents/Form';
import { createMedia, newFormSubmitHandle } from '../../api/fetch';


function MovieForm(props) {
// declare state for initial new Movie form object shape
 const [newMovie, setNewMovie] = useState({
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

 const navigate = useNavigate()

    return (
        <Form 
        submitFunction = {newFormSubmitHandle}
        fetchFunction = {createMedia}
         stateVar = {newMovie}
         setStateFunction = {setNewMovie}
         endpoint = {`movies`}
         navigateVar= {navigate}
        />
   
    );
}

export default MovieForm;
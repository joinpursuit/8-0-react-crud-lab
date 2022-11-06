import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { newFormSubmitHandle, handleFormInput } from '../../api/fetch';
import Movie from './Movie';


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
       <form
       onSubmit = {(event) => {newFormSubmitHandle(event, newMovie, `movies`, navigate )}}>

        <label htmlFor="title">Movie Title:</label>
        <input
        type="text"
        id="title"
        value={newMovie.title}
        onChange={(event) => {handleFormInput(event, newMovie, setNewMovie)}}
        />

        <label htmlFor="description">Movie Description:</label>
        <input
        type="text"
        id="description"
        value={newMovie.description}
        onChange={(event) => {handleFormInput(event, newMovie, setNewMovie)}}
        />

        <label htmlFor="rating">Movie Rating:</label>
        <input
        type="text"
        id="rating"
        value={newMovie.rating}
        onChange={(event) => {handleFormInput(event, newMovie, setNewMovie)}}
        />

        <label htmlFor="country">Country:</label>
        <input
        type="text"
        id="country"
        value={newMovie.country}
        onChange={(event) => {handleFormInput(event, newMovie, setNewMovie)}}
        />

        <label htmlFor="listedIn">Categories:</label>
        <input
        type="text"
        id="listedIn"
        value={newMovie.listedIn}
        onChange={(event) => {handleFormInput(event, newMovie, setNewMovie)}}
        />

        <label htmlFor="releaseYear">Released:</label>
        <input
        type="text"
        id="releaseYear"
        value={newMovie.releaseYear}
        onChange={(event) => {handleFormInput(event, newMovie, setNewMovie)}}
        />

        <label htmlFor="duration">Duration:</label>
        <input
        type="text"
        id="duration"
        value={newMovie.duration}
        onChange={(event) => {handleFormInput(event, newMovie, setNewMovie)}}
        />

        <label htmlFor="type">Type:</label>
        <input
        type="text"
        id="type"
        value={newMovie.type}
        onChange={(event) => {handleFormInput(event, newMovie, setNewMovie)}}
        />

        <input type = "submit" />

       </form>
    );
}

export default MovieForm;
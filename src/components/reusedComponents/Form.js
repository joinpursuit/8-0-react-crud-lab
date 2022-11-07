import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {  createMedia, editMedia, getOneFetch } from "../../api/fetch";
import { handleFormInput, newFormSubmitHandle, editFormSubmitHandle } from "../../helperFunctions";
import ErrorMessage from "../errors/ErrorMessage";
import "../css/ShowsForm.css"

function Form({endpoint, edit}) {
  // Declare state for obj shapefor input
  const [input, setInput] = useState({
    type: "",
    title: "",
    country: "",
    dateAdded: "",
    description: "",
    duration: "",
    listedIn: "",
    rating: "",
    releaseYear: ""
  })
  // Declare state for error
  const [error, setError] = useState(false)

  // Declare variable for navigate -> send back to index page
  const navigate = useNavigate()
  
// FOR EDIT FORM CONDITIONAL -> useParams/ and fetch to set default values in form if edit prop true
  // Declare variable for useParams for edit version
  const {id} = useParams()

  // use effect to on page load fetch for data for selected show, to be default value for the form -> dependency array based on change in show id 
  useEffect(() => {
    if(edit) {
      getOneFetch(id, endpoint)
      .then(respJson => setInput(respJson))
      .catch(err => setError(true))
    }
  }, [id])


  return (
   <>
    {
      error ? <ErrorMessage /> :
      <form
      onSubmit={(event) => {!id ?
        newFormSubmitHandle(event, input, endpoint, navigate, createMedia) :
        editFormSubmitHandle(event, input, endpoint, navigate, editMedia, id)
      }}
    >
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={input.title}
        onChange={(event) => {
          handleFormInput(event, input, setInput);
        }}
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={input.description}
        onChange={(event) => {
          handleFormInput(event, input, setInput);
        }}
      />

      <label htmlFor="type">Type</label>
      <input
        type="text"
        id="type"
        value={input.type}
        onChange={(event) => {
          handleFormInput(event, input, setInput);
        }}
      />

      <label htmlFor="rating">Rating:</label>
      <input
        type="text"
        id="rating"
        value={input.rating}
        onChange={(event) => {
          handleFormInput(event, input, setInput);
        }}
      />

      <label htmlFor="listedIn">Listed in</label>
      <input
        type="text"
        id="listedIn"
        value={input.listedIn}
        onChange={(event) => {
          handleFormInput(event, input, setInput);
        }}
      />

      <label htmlFor="duration">Duration</label>
      <input
        type="text"
        id="duration"
        value={input.duration}
        onChange={(event) => {
          handleFormInput(event, input, setInput);
        }}
      />

      <label htmlFor="releaseYear">Release Year</label>
      <input
        type="text"
        id="releaseYear"
        value={input.releaseYear}
        onChange={(event) => {
          handleFormInput(event, input, setInput);
        }}
      />

      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        value={input.country}
        onChange={(event) => {
          handleFormInput(event, input, setInput);
        }}
      />

      <label htmlFor="dateAdded">Date added:</label>
      <input
        type="text"
        id="dateAdded"
        value={input.dateAdded}
        onChange={(event) => {
          handleFormInput(event, input, setInput);
        }}
      />

      <br />

      <input type="submit" />
    </form>
    }
   </>
    
  );
}

export default Form;

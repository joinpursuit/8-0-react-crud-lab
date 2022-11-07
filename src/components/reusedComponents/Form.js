import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleFormInput, createMedia, newFormSubmitHandle } from "../../api/fetch";
import "../shows/ShowsForm.css"

function Form({submitFunction, fetchFunction, stateVar, setStateFunction, endpoint, navigateVar, paramVar}) {
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

  // Declare variable for navigate -> send back to index page
  const navigate = useNavigate()


  return (
    <form
      onSubmit={(event) => {!paramVar ?
        newFormSubmitHandle(event, input, endpoint, navigate, createMedia) :
        newFormSubmitHandle(event, stateVar, endpoint, navigateVar, fetchFunction, paramVar)
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
  );
}

export default Form;

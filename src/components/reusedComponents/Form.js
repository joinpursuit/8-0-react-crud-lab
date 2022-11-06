import React from "react";

function Form({newFormSubmitHandle, handleFormInput, stateVar, setStateFunction, endpoint, navigateVar}) {
  return (
    <form
      onSubmit={(event) => {
        newFormSubmitHandle(event, stateVar, endpoint, navigateVar);
      }}
    >
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={stateVar.title}
        onChange={(event) => {
          handleFormInput(event, stateVar, setStateFunction);
        }}
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={stateVar.description}
        onChange={(event) => {
          handleFormInput(event, stateVar, setStateFunction);
        }}
      />

      <label htmlFor="type">Type</label>
      <input
        type="text"
        id="type"
        value={stateVar.type}
        onChange={(event) => {
          handleFormInput(event, stateVar, setStateFunction);
        }}
      />

      <label htmlFor="rating">Rating:</label>
      <input
        type="text"
        id="rating"
        value={stateVar.rating}
        onChange={(event) => {
          handleFormInput(event, stateVar, setStateFunction);
        }}
      />

      <label htmlFor="listedIn">Listed in</label>
      <input
        type="text"
        id="listedIn"
        value={stateVar.listedIn}
        onChange={(event) => {
          handleFormInput(event, stateVar, setStateFunction);
        }}
      />

      <label htmlFor="duration">Duration</label>
      <input
        type="text"
        id="duration"
        value={stateVar.duration}
        onChange={(event) => {
          handleFormInput(event, stateVar, setStateFunction);
        }}
      />

      <label htmlFor="releaseYear">Release Year</label>
      <input
        type="text"
        id="releaseYear"
        value={stateVar.releaseYear}
        onChange={(event) => {
          handleFormInput(event, stateVar, setStateFunction);
        }}
      />

      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        value={stateVar.country}
        onChange={(event) => {
          handleFormInput(event, stateVar, setStateFunction);
        }}
      />

      <label htmlFor="dateAdded">Date added:</label>
      <input
        type="text"
        id="dateAdded"
        value={stateVar.dateAdded}
        onChange={(event) => {
          handleFormInput(event, stateVar, setStateFunction);
        }}
      />

      <br />

      <input type="submit" />
    </form>
  );
}

export default Form;

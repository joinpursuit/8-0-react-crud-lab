import { useState } from "react";
import { newFormSubmitHandle, handleFormInput } from "../../api/fetch";
import { useNavigate } from "react-router-dom";
import "./ShowsForm.css";

export default function ShowsForm() {
  const [show, setShow] = useState({
    type: "",
    title: "",
    country: "",
    dateAdded: "",
    description: "",
    duration: "",
    listedIn: "",
    rating: "",
    releaseYear: "",
  });

  // when user submits the form, send them back to the index/ newform page, wherever
  const navigate = useNavigate()


  return (
    <form onSubmit={(event) => {newFormSubmitHandle(event, show, `shows`, navigate)}}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={show.title}
        onChange={(event) => {handleFormInput(event, show, setShow)}}
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={show.description}
        onChange={(event) => {handleFormInput(event, show, setShow)}}
      />

      <label htmlFor="type">Type</label>
      <input
        type="text"
        id="type"
        value={show.type}
        onChange={(event) => {handleFormInput(event, show, setShow)}}
      />

      <label htmlFor="rating">Rating:</label>
      <input
        type="text"
        id="rating"
        value={show.rating}
        onChange={(event) => {handleFormInput(event, show, setShow)}}
      />

      <label htmlFor="listedIn">Listed in</label>
      <input
        type="text"
        id="listedIn"
        value={show.listedIn}
        onChange={(event) => {handleFormInput(event, show, setShow)}}
      />

      <label htmlFor="duration">Duration</label>
      <input
        type="text"
        id="duration"
        value={show.duration}
        onChange={(event) => {handleFormInput(event, show, setShow)}}
      />

      <label htmlFor="releaseYear">Release Year</label>
      <input
        type="text"
        id="releaseYear"
        value={show.releaseYear}
        onChange={(event) => {handleFormInput(event, show, setShow)}}
      />

      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        value={show.country}
        onChange={(event) => {handleFormInput(event, show, setShow)}}
      />

      <label htmlFor="dateAdded">Date added:</label>
      <input
        type="text"
        id="dateAdded"
        value={show.dateAdded}
        onChange={(event) => {handleFormInput(event, show, setShow)}}
      />

      <br />

      <input type="submit" />
    </form>
  );
}

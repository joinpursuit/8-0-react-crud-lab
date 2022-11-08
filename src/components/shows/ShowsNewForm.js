import { useState } from "react";
import { createShow } from "../../api/fetch";
import ErrorMessage from "../errors/ErrorMessage";
import "./ShowsForm.css";

export default function ShowsForm() {
  const initialState = {
    type: "",
    title: "",
    country: "",
    dateAdded: "",
    description: "",
    duration: "",
    listedIn: "",
    rating: "",
    releaseYear: "",
  };
  const [show, setShow] = useState({
    ...initialState,
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    setSuccess(false);
    setError(false);
    createShow(show)
      .then(() => {
        setSuccess(true);
        setShow({ ...initialState });
      })
      .catch(() => setError(true));
  }

  function handleTextChange(event) {
    setShow({
      ...show,
      [event.target.id]: event.target.value,
    });
  }

  return error ? (
    <ErrorMessage />
  ) : (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={show.title}
        onChange={handleTextChange}
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={show.description}
        onChange={handleTextChange}
      />

      <label htmlFor="type">Type</label>
      <input
        type="text"
        id="type"
        value={show.type}
        onChange={handleTextChange}
      />

      <label htmlFor="rating">Rating:</label>
      <input
        type="text"
        id="rating"
        value={show.rating}
        onChange={handleTextChange}
      />

      <label htmlFor="listedIn">Listed in</label>
      <input
        type="text"
        id="listedIn"
        value={show.listedIn}
        onChange={handleTextChange}
      />

      <label htmlFor="duration">Duration</label>
      <input
        type="text"
        id="duration"
        value={show.duration}
        onChange={handleTextChange}
      />

      <label htmlFor="releaseYear">Release Year</label>
      <input
        type="text"
        id="releaseYear"
        value={show.releaseYear}
        onChange={handleTextChange}
      />

      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        value={show.country}
        onChange={handleTextChange}
      />

      <label htmlFor="dateAdded">Date added:</label>
      <input
        type="text"
        id="dateAdded"
        value={show.dateAdded}
        onChange={handleTextChange}
      />

      <br />

      <input type="submit" />
      {success && (
        <small className="success-message">
          {" "}
          successfully created a new show
        </small>
      )}
    </form>
  );
}

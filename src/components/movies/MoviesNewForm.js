import { useState } from "react";
import { createMovie } from "../../api/fetch";
import ErrorMessage from "../errors/ErrorMessage";
import "../shows/ShowsForm.css";

export default function MoviesForm() {
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
  const [movie, setMovie] = useState({
    ...initialState,
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    setSuccess(false);
    setError(false);
    createMovie(movie)
      .then(() => {
        setSuccess(true);
        setMovie({ ...initialState });
      })
      .catch(() => setError(true));
  }

  function handleTextChange(event) {
    setMovie({
      ...movie,
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
        value={movie.title}
        onChange={handleTextChange}
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={movie.description}
        onChange={handleTextChange}
      />

      <label htmlFor="type">Type</label>
      <input
        type="text"
        id="type"
        value={movie.type}
        onChange={handleTextChange}
      />

      <label htmlFor="rating">Rating:</label>
      <input
        type="text"
        id="rating"
        value={movie.rating}
        onChange={handleTextChange}
      />

      <label htmlFor="listedIn">Listed in</label>
      <input
        type="text"
        id="listedIn"
        value={movie.listedIn}
        onChange={handleTextChange}
      />

      <label htmlFor="duration">Duration</label>
      <input
        type="text"
        id="duration"
        value={movie.duration}
        onChange={handleTextChange}
      />

      <label htmlFor="releaseYear">Release Year</label>
      <input
        type="text"
        id="releaseYear"
        value={movie.releaseYear}
        onChange={handleTextChange}
      />

      <label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        value={movie.country}
        onChange={handleTextChange}
      />

      <label htmlFor="dateAdded">Date added:</label>
      <input
        type="text"
        id="dateAdded"
        value={movie.dateAdded}
        onChange={handleTextChange}
      />

      <br />

      <input type="submit" />
      {success && (
        <small className="success-message">
          {" "}
          successfully created a new movie
        </small>
      )}
    </form>
  );
}

import { useEffect, useState } from "react";
import "../shows/ShowsForm.css";
import { updateMovie, getOneMovie } from "../../api/fetch";
import { useParams, useNavigate } from "react-router-dom";
import ErrorMessage from "../errors/ErrorMessage";

export default function MoviesForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loadingError, setLoadingError] = useState(false);
  const [movie, setMovie] = useState({
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

  function handleSubmit(event) {
    event.preventDefault();
    updateMovie(id, movie).then(() =>
      navigate(`/movies/${id}`).catch((error) => setLoadingError(true))
    );
  }

  function handleTextChange(event) {
    setMovie({
      ...movie,
      [event.target.id]: event.target.value,
    });
  }
  useEffect(() => {
    getOneMovie(id)
      .then((res) => {
        setMovie({ ...res });
        setLoadingError(false);
      })
      .catch((error) => setLoadingError(true));
  }, [id]);
  return loadingError ? (
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
    </form>
  );
}

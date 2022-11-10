import { useNavigate } from "react-router-dom";

import { createOne, updateOne } from "../../api/fetch";

import "./MovieForm.css";

export default function MovieForm({ movie, setMovie, isEdit, id }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    (isEdit ? updateOne("movies", id, movie) : createOne("movies", movie))
      .then((res) => navigate(`/movies/${res.id}`))
      .catch((err) => console.log(err));
  };

  const handleTextChange = (event) => {
    setMovie({
      ...movie,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title:{" "}
        <input
          type="text"
          id="title"
          value={movie.title}
          onChange={handleTextChange}
        ></input>
      </label>
      <label htmlFor="description">
        Description:{" "}
        <input
          type="text"
          id="description"
          value={movie.description}
          onChange={handleTextChange}
        ></input>
      </label>
      <label htmlFor="rating">
        Rating:{" "}
        <input
          type="text"
          id="rating"
          value={movie.rating}
          onChange={handleTextChange}
        ></input>
      </label>
      <label htmlFor="listedIn">
        Listed in:{" "}
        <input
          type="text"
          id="listedIn"
          value={movie.listedIn}
          onChange={handleTextChange}
        ></input>
      </label>
      <label htmlFor="duration">
        Duration:{" "}
        <input
          type="text"
          id="duration"
          value={movie.duration}
          onChange={handleTextChange}
        ></input>
      </label>
      <label htmlFor="releaseYear">
        Release Year:{" "}
        <input
          type="text"
          id="releaseYear"
          value={movie.releaseYear}
          onChange={handleTextChange}
        ></input>
      </label>
      <label htmlFor="country">
        Country:{" "}
        <input
          type="text"
          id="country"
          value={movie.country}
          onChange={handleTextChange}
        ></input>
      </label>
      <label htmlFor="dateAdded">
        Date added:{" "}
        <input
          type="text"
          id="dateAdded"
          value={movie.dateAdded}
          onChange={handleTextChange}
        ></input>
      </label>
      <br />
      <input className="submit-movie" type="submit" />
    </form>
  );
}

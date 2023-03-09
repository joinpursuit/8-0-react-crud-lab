import { useState } from "react";
import { createMovie } from "../../api/fetch";
import {  useNavigate } from "react-router-dom";


export default function MoviesNewForm() {
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

    let navigate = useNavigate();
    
    function handleSubmit(event) {
        event.preventDefault();
        createMovie(movie).then((response) => {
            console.log(response);
            navigate(`/movies${response.id}`)
        })
        .catch((error) => {
            console.error(error)
        });
    }


    // First thing to do is to make a copy of state
    // We then need to add the new movie. The event.target.value is what the user has inputted.
    // But THEN, we need to add the movie to the database. Otherwise, all that has happened is that you have loaded the trebuchet and never released it.

    function handleTextChange(event) {
        setMovie({
          ...movie,
          [event.target.id]: event.target.value,
        });
      }

      // function createMovie(){
      //   const createMovie = {
      //     type: movie.type,
      //     title: movie.title,
      //     country: movie.country,
      //     dateAdded: movie.dateAdded,
      //     description: movie.description,
      //     duration: movie.duration,
      //     listedIn: movie.listedIn,
      //     rating: movie.rating,
      //     releaseYear: movie.releaseYear,
      //   };
      //   setMovie([createMovie, ...movie])
      // }


    return (
     
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

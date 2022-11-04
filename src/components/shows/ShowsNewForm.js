import { useState } from "react";
import { createShow } from "../../api/fetch";
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

  function handleSubmit(e) {
    // submit button so prevent default
    e.preventDefault()
    // show is state that holds object that is updated for each form input value typed in -> send show in POST fetch -> and what is returned from POST fetch is the created show object, so then use id kay in that new show object to navigate to that show's individual page
    createShow(show)
    .then(resp => navigate(`/shows/${resp.id}`))
    .catch(err => console.log(err) )
  }

  function handleTextChange(event) {
    setShow(
      {...show, [event.target.id]: event.target.value,}
    );
  }

  return (
    <form onSubmit={(event) => {handleSubmit(event)}}>
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
    </form>
  );
}

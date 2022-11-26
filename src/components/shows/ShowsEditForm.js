import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./ShowsForm.css";
import { useParams } from "react-router-dom";
import { updateShow, getOneShow } from "../../api/fetch";

export default function ShowsForm() {
  const navigate = useNavigate()
  // RECUPERAR EL ID
  const { id } = useParams();

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

  // CARGANDO LA INFORMACION DEL SHOW EXISTENTE EN EL FORMULARIO
  // 1-. Se ejecuta la peticion para obtener la informacion de este show en especifico
  // 2-. Una vez se tiene la informacion, se guarda en el estado
  useEffect(() => {
    getOneShow(id)
      .then(data => setShow(data))
  }, [])




  function handleSubmit(event) {
    event.preventDefault()

    updateShow(id, show)
      .then(data => {
        console.log(data)
        navigate('/shows')
      })
  }

  function handleTextChange(event) {
    setShow({
      ...show,
      [event.target.id]: event.target.value,
    });
  }
  ///////////////////////////////////////////////////
  // function clickSubmit(event) {
  //   event.preventDefault()
  //   console.log(show)
  // }

  

  return (
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

      <input
        type="submit" 
      />

      {/* <button onClick={() => clickSubmit()}>
        SUBMIT
      </button> */}

      {/* <button>
        <Link to="/shows">SUBMIT GO!</Link>
      </button> */}
    </form>
  );
}

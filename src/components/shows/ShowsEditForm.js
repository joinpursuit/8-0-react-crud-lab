import { useEffect, useState } from "react";
import "./ShowsForm.css";
import { entry_api } from "../../api/fetch";
import { useNavigate, useParams } from "react-router-dom";
export default function ShowsForm({entry}) {
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
  const {id} = useParams();
  const navigate = useNavigate();
  const ea = entry_api[entry];
////////////////////////////////////
  function on_reset_form(){
    setShow({
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
  }
////////////////////////////////////

  useEffect(()=>{
    ea.getOne(id,entry)
      .then((data)=>{
        setShow(data);
        
      })
      .catch(error=>{

      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);


  function handleSubmit(event) {
    event.preventDefault();
      ea.update(id,show,entry)
      .then((data)=>{
        on_reset_form();
        navigate(`/${entry}s/${id}`);
      })
      .catch((error)=>{
        console.log(error)
      });
    
  }

  function handleTextChange(event) {
    setShow({
      ...show,
      [event.target.id]: event.target.value,
    });
  }

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

      <input type="submit" />
    </form>
  );
}

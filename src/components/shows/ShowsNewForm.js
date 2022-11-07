import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ShowsForm.css";
import Form from "../reusedComponents/Form";
import { createMedia, newFormSubmitHandle } from "../../api/fetch";

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
    <Form 
    submitFunction = {newFormSubmitHandle}
    fetchFunction = {createMedia}
    stateVar = {show}
    setStateFunction = {setShow}
    endpoint = {`shows`}
    navigateVar= {navigate}
    />
    
  );
}

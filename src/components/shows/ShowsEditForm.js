import { useState, useEffect } from "react";
import "./ShowsForm.css";
import { updateMedia, getOneFetch, editFormSubmitHandle } from "../../api/fetch";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../reusedComponents/Form";


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

  // useNavigate to navigate somewhere after show is updated (submit)
  const navigate = useNavigate()
  // use Params to grab show id from url to send to fetch -> update function
  const {id} = useParams()

  // use effect to on page load fetch for data for selected show, to be default value for the form -> dependency array based on change in show id 
  useEffect(() => {
    getOneFetch(id, `shows`)
    .then(resp => setShow(resp))
  }, [id])

  return (

    <Form 
    submitFunction = {editFormSubmitHandle}
    fetchFunction = {updateMedia}
    stateVar = {show}
    setStateFunction = {setShow}
    endpoint = {`shows`}
    navigateVar= {navigate}
    paramVar = {id}
    />
   
  );
}

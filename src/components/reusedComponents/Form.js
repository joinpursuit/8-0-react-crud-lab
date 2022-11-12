import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {  createMedia, editMedia, getOneFetch } from "../../api/fetch";
import { formSubmitHandle } from "../../helperFunctions";
import ErrorMessage from "../errors/ErrorMessage";
import Input from "./Input";
import "../css/ShowsForm.css"

function Form({endpoint, edit}) {
  // Declare state for obj shapefor input
  const [input, setInput] = useState({
    title: "",
    type: "",
    country: "",
    dateAdded: "",
    description: "",
    duration: "",
    listedIn: "",
    rating: "",
    releaseYear: ""
  })
  // Declare state for error
  const [error, setError] = useState(false)

  // variable for array of keys in input object
  const arr = Object.keys(input)
  
  // Declare variable for navigate -> send back to index page
  const navigate = useNavigate()
  
// FOR EDIT FORM CONDITIONAL -> useParams/ and fetch to set default values in form if edit prop true
  // Declare variable for useParams for edit version
  const {id} = useParams()

  // use effect to on page load fetch for data for selected show, to be default value for the form -> dependency array based on change in show id 
  useEffect(() => {
    if(edit) {
      getOneFetch(id, endpoint)
      .then(respJson => setInput(respJson))
      .catch(err => setError(true))
    }
  }, [id])


  return (
   <>
   <h2 style={{textAlign: 'center'}}>{edit ? `Edit Form` : `Create Form`}</h2>
    {
      error ? <ErrorMessage /> :
      <form
      onSubmit={(event) => {!id ?
        formSubmitHandle(event, input, endpoint, navigate, createMedia) :
        formSubmitHandle(event, input, endpoint, navigate, editMedia, id)
      }}
    >
      {
        arr.map(el => {
          if(el !== `id`){
            return <Input
            key = {el}
            input = {input}
            property = {el}
            setInput = {setInput} />
          }
          
        }
          
          )
      }
      <br />
      <input type="submit" />
    </form>
    }
   </>
  );
}

export default Form;



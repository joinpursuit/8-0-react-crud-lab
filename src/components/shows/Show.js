import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOneFetch, deleteMedia } from "../../api/fetch";
import "./Show.css";
import DisplayIndividualInfo from '../reusedComponents/DisplayIndividualInfo'

function Show() {
  const [show, setShow] = useState({});
  const [loadingError, setLoadingError] = useState(false);

  const { id } = useParams();
  // when show is deleted, want to send user back to shows index page -> useNavigate
  const navigate = useNavigate()

  function handleDelete() {
    deleteMedia(id, `shows`)
    .then(() => navigate("/shows"))
    .catch(err => setLoadingError(true))
  }

  // Object.keys to get an array of the object's key values. If the array's length is 0 (no keys), it is an empty object.
  useEffect(() => {
    getOneFetch(id, `shows`).then(respJson => {
      setShow(respJson)

      if(Object.keys(respJson).length === 0){
        setLoadingError(true)
      }
      else{
        setLoadingError(false)
      }
    })
    .catch(err => setLoadingError(true))
  }, [id])
  // use the id value in dependency array to fire whenever the selected show id value changes. -> id is optional param value :id

  return (
    
    <DisplayIndividualInfo
    dataVar = {show} 
    errorVar ={loadingError} 
    paramVar = {id}
    deleteFunction ={handleDelete}
    endpoint = {`shows`} />
   
  );
}

export default Show;

// Shows
// add variable that represents value from .env file -> this is base url -> still need to add endpoints in other areas of code
// REACT_APP_API_BASE_URL="http://localhost:5001/api"
const URL = process.env.REACT_APP_API_BASE_URL;


// DYNAMIC CREATE MEDIA FETCH CALL FUNCTION (shows/movies)
/* using a POST fetch call to grab the form info in form -> turned from an object to JSON to pass through 'body' key in the 'options' object */
export function createMedia(endpoint, obj) {
  const options = {
    method: "POST",
    body: JSON.stringify(obj),
    headers: { "Content-Type": "application/json" },
  };
  // resp from server is set by server, the return is the newly created show
  return fetch(`${URL}/${endpoint}/`, options).then((resp) => resp.json()
  )
}

// DYNAMIC DELETE MEDIA FETCH CALL FUNCTION (show/movies)
// make a DELETE request in the fetch, by default it's GET (like been using), so have to specify change in request type
export function deleteMedia(paramVar, endpoint) {
  const reqType = {method: 'DELETE'}
  return fetch(`${URL}/${endpoint}/${paramVar}`, reqType)
}

// DYNAMIC EDIT/UPDATE FETCH CALL FUNCTION (shows/movies)
// use a PUT fetch request to edit a show
export function editMedia(endpoint, obj, paramVar) {
  const options = {
    method: "PUT",
    body: JSON.stringify(obj),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/${endpoint}/${paramVar}`, options).then((response) => response.json())
}

// DYNAMIC GET ONE OBJECT FETCH CALL USING PARAMS (shows/movies)
// fetch call to get data from specific show /show/:id -> id value is parameter
export function getOneFetch(paramVar, endpoint) {
  return fetch(`${URL}/${endpoint}/${paramVar}`)
  .then(resp => resp.json())
}

// Index/Get all
// use 'URL' in showIndex to get all shows -> this will be fetch function for endpoint /shows -> 2nd .then() is where decide what to do with respJson so that will be done in component
export function getAllMedia(endpoint) {
  return fetch(`${URL}/${endpoint}`)
  .then(resp => resp.json())
}

/* REUSED DYNAMIC FUNCTIONS FOR BOTH SHOW AND MOVIE COMPONENTS
    - in future would move to separate reused/helper function file
     */

// dynamic function to filter for ALL search bars, 
export function filterSearch(input, arr) {
  const filteredArr = arr.filter((obj) => 
  obj.title.toLowerCase().match(input.toLowerCase())
  )
  return filteredArr
}

// dynamic function to handle ALL form inputs
export function handleFormInput(e, obj, setFunction) {
  setFunction(
    {...obj, [e.target.id]: e.target.value,}
  );
}

// dynamic function to handle submit for fetch calls to create a new show/movie obj -> 
export function newFormSubmitHandle(e, obj, endpoint, navigateVar, fetchFunction) {
  // submit button so prevent default
  e.preventDefault()
  // obj is state that holds object that is updated for each form input value typed in -> send obj in POST fetch -> and what is returned from POST fetch is the created media object, so then use id key in that new media object to navigate to that media's individual page
  fetchFunction(endpoint, obj)
  .then(resp => navigateVar(`/${endpoint}/${resp.id}`))
  .catch(err => console.log(err) )
}

// Function for EDIT FORM SUBMIT HANDLE (USEPARAMS VARIABLE NEEDED)
export function editFormSubmitHandle(e, obj, endpoint, navigateVar, fetchFunction, paramVar) {
  // function needs useParam Value 
  e.preventDefault()
  fetchFunction(endpoint, obj, paramVar)
  .then(resp => navigateVar(`/${endpoint}/${resp.id}`))
  .catch(err => console.log(err) )
}

//  function to convert endpoint strings
export function convertEndpoint (string, firstUpperCase = false, singleUpperCase = false, singleLowerCase = false) {
  if(firstUpperCase){
    return `${string.slice(0,1).toUpperCase()}${string.slice(1).toLowerCase()}`
  }
  if(singleUpperCase){
    const upperPlural = `${string.slice(0,1).toUpperCase()}${string.slice(1).toLowerCase()}`
    return upperPlural.slice(0, upperPlural.length-1)
  }
  if(singleLowerCase){
    return string.slice(0, string.length-1).toLowerCase()
  }

}

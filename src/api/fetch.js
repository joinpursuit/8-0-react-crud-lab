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



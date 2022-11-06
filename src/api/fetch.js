// Shows
// add variable that represents value from .env file -> this is base url -> still need to add endpoints in other areas of code
// REACT_APP_API_BASE_URL="http://localhost:5001/api"
const URL = process.env.REACT_APP_API_BASE_URL;

// function to filter for search bars, dynamic
export function filterSearch(input, arr) {
  const filteredArr = arr.filter((obj) => 
  obj.title.toLowerCase().match(input.toLowerCase())
  )
  return filteredArr
}

// dynamic function to handle form inputs
export function handleFormInput(e, obj, setFunction) {
  setFunction(
    {...obj, [e.target.id]: e.target.value,}
  );
}

// function to handle submit for fetch calls to create a new show/movie obj -> dynamic
export function newFormSubmitHandle(e, obj, endpoint, navigateVar ) {
  // submit button so prevent default
  e.preventDefault()
  // obj is state that holds object that is updated for each form input value typed in -> send obj in POST fetch -> and what is returned from POST fetch is the created media object, so then use id key in that new media object to navigate to that media's individual page
  createMedia(endpoint, obj)
  .then(resp => navigateVar(`/${endpoint}/${resp.id}`))
  .catch(err => console.log(err) )
}

// Create
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

// Delete
// make a DELETE request in the fetch, by default it's GET (like been using), so have to specify change in request type
export function destroyShow(id) {
  const reqType = {method: 'DELETE'}
  return fetch(`${URL}/shows/${id}`, reqType)
}

// Index/Get all
// use 'URL' in showIndex to get all shows -> this will be fetch function for endpoint /shows -> 2nd .then() is where decide what to do with respJson so that will be done in component
export function getAllShows() {
  return fetch(`${URL}/shows`)
  .then(resp => resp.json())

}

// Show/Get one
// fetch call to get data from specific show /show/:id -> id value is parameter
export function getOneShow(showId) {
  return fetch(`${URL}/shows/${showId}`)
  .then(resp => resp.json())
}

// Update
// use a PUT fetch request to edit a show
export function updateShow(showId, obj) {
  const options = {
    method: "PUT",
    body: JSON.stringify(obj),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/shows/${showId}`, options).then((response) => response.json())
}

// Movies
// fetch for all movies -> movieIndex page
export function getAllMovies() {
  return fetch(`${URL}/movies`)
  .then(resp => resp.json())
}

// function for fetch with movie id endpoint -> movie page
export function getByMovieId (value) {
  return fetch(`${URL}/movies/${value}`)
  .then(resp => resp.json())
}

// function to remove movie via fetch
export function deleteMovie(value) {
  const reqType = {method: 'DELETE'}
  return fetch(`${URL}/movies/${value}`, reqType)
}


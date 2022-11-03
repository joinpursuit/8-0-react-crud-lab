// Shows
// add variable that represents value from .env file -> this is base url -> still need to add endpoints in other areas of code
// REACT_APP_API_BASE_URL="http://localhost:5001/api"
const URL = process.env.REACT_APP_API_BASE_URL;

export function filterSearch(input, arr) {
  const filteredArr = arr.filter((obj) => obj.title.toLowerCase().match(input.toLowerCase())
  );

  return filteredArr
}

// Create
export function createShow(show) {
  return;
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
export function updateShow(id, show) {
  return;
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


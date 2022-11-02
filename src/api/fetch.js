// Shows
//!4 imported the URL fetch API from .env
const URL = process.env.REACT_APP_API_BASE_URL
// Create
export function createShow(show) {
  return;
}

// Delete
export function destroyShow(id) {
  return;
}

//! 5 
// Index/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`).then( result => result.json())
}

// Show/Get one
export function getOneShow(id) {
  return; 
}

// Update
export function updateShow(id, show) {
  return;
}

//!
// Movies
export function getAllMovies() {
  return fetch (`${URL}/movies`).then(result => result.json())
}

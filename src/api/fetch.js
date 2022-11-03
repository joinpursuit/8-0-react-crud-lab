// Shows
//!4 imported the URL fetch API from .env
const URL = process.env.REACT_APP_API_BASE_URL;
// Create
export function createShow(show) {
  return;
}
// Create / movie
export function createMovie(movie) {
  return;
}

// Delete
export function destroyShow(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/shows/${id}`, options);
}
// Delete / delete movie
export function removeMovie(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/movies/${id}`, options);
}

//! 5
// Index/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`).then((res) => res.json());
}
// Movies / Get aLl
export function getAllMovies() {
  return fetch(`${URL}/movies`).then((res) => res.json());
}

// Show/Get one
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((res) => res.json());
}
// movie / Get One
export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`).then((res) => res.json());
}

// Update
export function updateShow(id, show) {
  return;
}
//! MOVIE SECTION

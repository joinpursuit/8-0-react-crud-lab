// Shows
//!4 imported the URL fetch API from .env
const URL = process.env.REACT_APP_API_BASE_URL;
// Create 
export function createShow(show) {
  const options = {
    method: "POST",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/shows`, options).then((res) => {
    return res.json();
  });
}
// Create / movie
export function createMovie(movie) {
  const options = {
    method: "POST",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/movies`, options).then((res) => {
    return res.json();
  });
}

// Delete / delete show
export function destroyShow(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/shows/${id}`, options);
}
// Delete / delete movie
export function removeMovie(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/movies/${id}`, options);
}

// Index / Get all
export function getAllShows() {
  return fetch(`${URL}/shows`).then((res) => res.json());
}
// Movies / Get aLl
export function getAllMovies() {
  return fetch(`${URL}/movies`).then((res) => res.json());
}

// Show / Get one show
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((res) => res.json());
}
// movie / Get One Movie
export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`).then((res) => res.json());
}

// Update / Edit Show
export function updateShow(id, show) {
  const options = {
    method: "PUT",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/shows/${id}`, options).then((res) => {
    return res.json();
  });
}
// Update / Edit Movie
export function updateMovie(id, movie) {
  const options = {
    method: "PUT",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/movies/${id}`, options).then((res) => {
    return res.json();
  });
}

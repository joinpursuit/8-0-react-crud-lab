// Shows
const URL = process.env.REACT_APP_API_BASE_URL;
// Create
export function createShow(show) {
  return;
}

// Delete
export function destroyShow(id) {
  //! day 2 code along with JD
  const options = { method: 'DELETE' };
  return fetch(`${URL}/shows/${id}`, options);
}

// Index/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`).then((response) => response.json());
}

// Show/Get one
export function getOneShow(id) {
  //! day 2 code along with JD
  return fetch(`${URL}/shows/${id}`).then((response) => response.json());
}

// Update
export function updateShow(id, show) {
  return;
}

// Movies

// Delete
export function destroyMovie(id) {
  const options = { method: 'DELETE' };
  return fetch(`${URL}/movies/${id}`, options);
}
// Show/Get one Movie
export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`).then((response) => response.json());
}
export function getAllMovies() {
  return fetch(`${URL}/movies`).then((response) => response.json());
}

//! git checkout -- . removes all the changes I made to the file. do this in the api resources not in your local file/lab

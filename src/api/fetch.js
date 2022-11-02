// Shows
const URL = process.env.REACT_APP_API_BASE_URL;

// Create
export function createShow(show) {
  return;
}

// Delete
export function destroyShow(id) {
  return;
}

// Index/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`).then((res) => res.json());
}

// Show/Get one
export function getOneShow(id) {
  return;
}

// Update
export function updateShow(id, show) {
  return;
}

// Movies

export function getAllMovies() {
  return fetch(`${URL}/movies`).then((res) => res.json());
}

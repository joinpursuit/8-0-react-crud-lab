// Shows

const URL = process.env.REACT_APP_API_BASE_URL;


// Create
export function createShow(show) {
  return;
}

// Delete
export function destroyShow(id) {
  const options = { method: "DELETE" }
  return fetch(`${URL}/shows/${id}`, options);
}

// Index/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`) .then(res => res.json())

}

// Show/Get one
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then(res => res.json());
}

// Update
export function updateShow(id, show) {
  return;
}

// Movies

export function getAllMovies() {
  return fetch(`${URL}/movies`) .then(res => res.json())
}

// Delete a movie

export function destroyMovie(id){
  const options = { method : "DELETE" }
  return fetch(`${URL}/movies/${id}`, options)}

  // Show one movie

export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`).then(res => res.json());
}
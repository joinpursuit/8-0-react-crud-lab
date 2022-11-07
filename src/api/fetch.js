// Shows
const URL = process.env.REACT_APP_API_BASE_URL;

// Create
export function createShow(show) {
  const options ={
    method: "POST",
    body: JSON.stringify(show),
    headers: {"Content-type": "application/json"},
  };
  return fetch (`${URL}/shows/`, options).then(res => res.json());
}

// Delete
export function destroyShow(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/shows/${id}`, options);
}

// Index/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`).then((res) => res.json());
}

// Show/Get one
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((res) => res.json());
}

// Update
export function updateShow(id, show) {
  const options = {
    method: "PUT",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" },
  };
return fetch(`${URL}/shows/${id}`, options).then((res) => res.json());
}

// Movies


// Index/Get all
export function getAllMovies() {
  return fetch(`${URL}/movies`).then((res) => res.json());
  ;
}

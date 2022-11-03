// Shows
const URL = process.env.REACT_APP_API_BASE_URL
// Create
export function createShow(show) {
  return
}

// Delete
export function destroyShow(id) {
  return
}

// Index/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`).then((res) => res.json())
}

// Show/Get one
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((res) => res.json())
}

// Update
export function updateShow(id, show) {
  const options = { method: "DELETE" }
  return fetch(`${URL}/shows/${id}`, options)
}

// Movies

export function getAllMovies() {
  return
}

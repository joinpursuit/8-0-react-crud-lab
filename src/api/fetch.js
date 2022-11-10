const URL = process.env.REACT_APP_API_BASE_URL;

// Shows
// Create show
export function createShow(show) {
  const options = {
    method: "POST",
    body: JSON.stringify(show),
    headers: { "Contenet-Type": "application/json"}
  }
  return fetch(`${URL}/shows`, options).then(res => res.json())
}

// Delete show
export function destroyShow(id) {
  const options = { method: "DELETE"}
  return fetch(`${URL}/shows/${id}`, options)
}

// Index/Get all shows
export function getAllShows() {
  return fetch(`${URL}/shows`).then(res => res.json())
}

// Show/Get one
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((res) => res.json())
}

// Update show
export function updateShow(id, show) {
  const options = {
    method: "PUT",
    body: JSON.stringify(show),
    headers: { "Content-Type": 'application/json'}
  }
  return fetch(`${URL}/shows/${id}`, options).then(res => res.json())
}

// Movies
// Create movies
export function createMovie(movie) {
  const options = {
    method: "POST",
    body: JSON.stringify(movie),
    headers: { "Contenet-Type": "application/json"}
  }
  return fetch(`${URL}/movies`, options).then(res => res.json())
}

// Index/Get all movies
export function getAllMovies() {
  return fetch(`${URL}/movies`).then(res => res.json())
}

//  Index/Get one movie
export function getOneMovie(id){
  return fetch(`${URL}/movies/${id}`).then((res) => res.json())
}

// Update movie
export function updateMovie(id, movie) {
  const options = {
    method: "PUT",
    body: JSON.stringify(movie),
    headers: { "Content-Type": 'application/json'}
  }
  return fetch(`${URL}/movies/${id}`, options).then(res => res.json())
}

// Delete movie
export function destroyMovie(id){
  const options = {method: "DELETE"}
  return fetch(`${URL}/movies/${id}`, options)
}

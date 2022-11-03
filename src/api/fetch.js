// Shows
const URL = process.env.REACT_APP_API_BASE_URL;
// Create
export function createShow(show) {
  return;
}

// Delete
export function destroyShow(id) {
  const options = { method: "DELETE"}
  return fetch(`${URL}/shows/${id}`, options)
}

// Index/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`).then((res)=>res.json());
}

// Show/Get one
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((res) => res.json());
}

// Update
export function updateShow(id, show) {
  return;
}

// Movies

//Create Movies
export function createMovie(movie) {
  return;
}

//Index/Get All
export function getAllMovies(id) {
  return fetch(`${URL}/movies`).then((res) => res.json());
}

//Get One Movie
export function getOneMovie(id){
  return fetch(`${URL}/movies/${id}`).then((res) => res.json());
} 

// Delete Movies 
export function destroyMovie(id){
  const options = { method: "DELETE"}
  return fetch(`${URL}/shows/${id}`, options)
}

// Update
export function updateMovie(id, movie) {
  return;
}

//Created Functions 

export function filterShows(search, shows){
  return shows.filter((show) => show.title.toLowerCase().match(search.toLowerCase()))
}


const URL = process.env.REACT_APP_API_BASE_URL;

export function getAllMovies() {
  return fetch(`${URL}/movies`).then((response) => response.json());
}

export function getAllShows() {
  return fetch(`${URL}/shows`).then((response) => response.json());
}

// new function needed to delete

export function deleteShow(id) {
  const options = { method: "DELETE" }; //> necessary for our 'show' / 'movie' to be deleted
  return fetch(`${URL}/shows/${id}`, options).then((response) => response.json());
}

export function deleteMovie(id) {
  const options = { method: "DELETE" }; //> necessary for our 'show' / 'movie' to be deleted
  return fetch(`${URL}/movies/${id}`, options).then((response) => response.json());
}
const URL = process.env.REACT_APP_API_BASE_URL;
// Shows

// Create
export function createShow(show) {
  const options = {
    method: "Post",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/shows/`, options).then((response) => {
    return response.json();
  });
}

// Delete
export function destroyShow(id) {
  const options = {
    method: "DELETE",
  };
  return fetch(`${URL}/shows/${id}`, options);
}

// Index/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`).then((response) => response.json());
}

// Show/Get one
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((response) => response.json());
}

// Update
export function updateShow(id, show) {
  const options = {
    method: "PUT",
    bldy: JSON.stringify(show),
    headers: { "Content-Type": "application/jason" },
  };
  return fetch(`${URL}/shows/${id}`, options).then((response) => {
    return response.json();
  });
}

// Movies

// Create
export function createMovie(movie) {
  const options = {
    method: "Post",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application.json" },
  };
  return fetch(`${URL}/movies/`, options).then((response) => {
    return response.json();
  });
}

// Index/Get all
export function getAllMovies() {
  return fetch(`${URL}/movies`).then((response) => response.json());
}

// Movie/Get one
export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`).then((response) => response.json());
}

// Delete
export function destroyMovie(id) {
  const options = {
    method: "DELETE",
  };
  return fetch(`${URL}/movies/${id}`, options);
}

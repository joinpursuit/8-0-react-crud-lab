// Shows
const baseUrl = process.env.REACT_APP_API_BASE_URL;
// Create
export function createShow(show) {
  return fetch(`${baseUrl}/shows`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(show),
  }).then((res) => res.json());
}


// Delete
export function destroyShow(id) {
  return fetch(`${baseUrl}/shows/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );
}

// Index/Get all
export function getAllShows() {
  return fetch(`${baseUrl}/shows`).then((res) => res.json());
}

// Show/Get one
export function getOneShow(id) {
  return fetch(`${baseUrl}/shows/${id}`).then((res) => res.json());
}

// Update
export function updateShow(id, show) {
  return fetch(`${baseUrl}/shows/${id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(show),
  }).then((res) => res.json());
}

// Movies

export function getAllMovies() {
  return fetch(`${baseUrl}/movies`).then((res) => res.json());
}

export function destroyMovie(id) {
  return fetch(`${baseUrl}/movies/${id}`, { method: "DELETE" }).then((res) =>
    res.json()
  );
}

export function getOneMovie(id) {
  return fetch(`${baseUrl}/movies/${id}`).then((res) => res.json());
}

export function updateMovie(id, movie) {
  return fetch(`${baseUrl}/movies/${id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(movie),
  }).then((res) => res.json());
}

export function createMovie(movie) {
  return fetch(`${baseUrl}/movies`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(movie),
  }).then((res) => res.json());
}
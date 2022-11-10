const URL = process.env.REACT_APP_API_BASE_URL;

// SHOWS

// CREATE SHOW
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

// Index/Get all (READ SHOWS)
export function getAllShows() {
  return fetch(`${URL}/shows`).then((response) => response.json());
}

// Show/Get one (READ SHOW)
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((response) => response.json());
}

// UPDATE SHOW
export function updateShow(id, show) {
  const options = {
    method: "PUT",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/shows/${id}`, options).then((response) => {
    return response.json();
  });
}

// DELETE SHOW
export function destroyShow(id) {
  const options = {
    method: "DELETE",
  };
  return fetch(`${URL}/shows/${id}`, options);
}

// MOVIES

// CREATE MOVIE
export function createMovie(movie) {
  const options = {
    method: "POST",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/movies/`, options).then((response) => {
    return response.json();
  });
}

// Index/Get all (READ MOVIES)
export function getAllMovies() {
  return fetch(`${URL}/movies`).then((response) => response.json());
}

// Movie/Get one (READ MOVIE)
export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`).then((response) => response.json());
}

// UPDATE MOVIE
export function updateMovie(id, movie) {
  const options = {
    method: "PUT",
    body: JSON.stringify(movie),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/movies/${id}`, options).then((response) => {
    return response.json();
  });
}

// DELETE
export function destroyMovie(id) {
  const options = {
    method: "DELETE",
  };
  return fetch(`${URL}/movies/${id}`, options);
}

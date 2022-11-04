const URL = process.env.REACT_APP_API_BASE_URL;

// Shows

// Create
export function createShow(show) {
  const options = {
    method: "POST",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/shows/`, options).then((response) => {
    return response.json();
  });
}

// Delete
// this id parameter will come from the state of the show in the Show.js file
export function destroyShow(id) {
  // a fetch call had an optional options argument.
  // In this case, we can use it to tell the backend that we want to use the DELETE method.
  // The default for fetch is GET so if you use any other method you must use this approach.
  const options = { method: "DELETE" };
  return fetch(`${URL}/shows/${id}`, options);
}

// Index/Get all
export function getAllShows() {
  // will handle 2nd '.then' in another file; doing 1st '.then' to parse to JS and get the data
  return fetch(`${URL}/shows`).then((response) => response.json());
}

// Show/Get one
// this id will come from our useParams and be used in the useEffect of the Show.js
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((response) => response.json());
}

// Update
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

// Movies

export function getAllMovies() {
  // return;
  return fetch(`${URL}/movies`).then((response) => response.json());
}

export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`).then((response) => response.json());
}

export function destroyMovie(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/movies/${id}`, options);
}

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

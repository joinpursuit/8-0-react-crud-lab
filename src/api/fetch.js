// Shows
const URL = process.env.REACT_APP_API_BASE_URL;
// Create
export function createShow(show) {
  //* day 3 code along with carlos
  //? inside of options, we can pass in the type of method(POST), and also the 'body'
  //? or the data that we are sending to the server to add to the database
  const options = {
    method: 'POST',
    body: JSON.stringify(show),
    headers: { 'Content-Type': 'application/json' },
  };
  //? Response from server is set by serer, in this case the TV API backend
  return fetch(`${URL}/shows`, options).then((response) => response.json());
}

// Delete
export function destroyShow(id) {
  //! day 2 code along with JD
  const options = { method: 'DELETE' };
  return fetch(`${URL}/shows/${id}`, options);
}

// Index/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`).then((response) => response.json());
}

// Show/Get one
export function getOneShow(id) {
  //! day 2 code along with JD
  return fetch(`${URL}/shows/${id}`).then((response) => response.json());
}

// Update
export function updateShow(id, show) {
  //* day 3 code along with carlos
  const options = {
    method: 'PUT',
    body: JSON.stringify(show),
    headers: { 'Content-Type': 'application/json' },
  };
  return fetch(`${URL}/shows/${id}`, options).then((response) =>
    response.json()
  );
}

// Movies
//Create Movie
export function createMovie(movie) {
  const options = {
    method: 'POST',
    body: JSON.stringify(movie),
    headers: { 'Content-Type': 'application/json' },
  };
  return fetch(`${URL}/movies`, options).then((response) => response.json());
}
// Delete
export function destroyMovie(id) {
  const options = { method: 'DELETE' };
  return fetch(`${URL}/movies/${id}`, options);
}
// Show/Get one Movie
export function getOneMovie(id) {
  return fetch(`${URL}/movies/${id}`).then((response) => response.json());
}
export function getAllMovies() {
  return fetch(`${URL}/movies`).then((response) => response.json());
}

export function updateMovie(id, movie) {
  const options = {
    method: 'PUT',
    body: JSON.stringify(movie),
    headers: { 'Content-Type': 'application/json' },
  };
  return fetch(`${URL}/movies/${id}`, options).then((response) =>
    response.json()
  );
}
//! git checkout -- . removes all the changes I made to the file. do this in the api resources not in your local file/lab

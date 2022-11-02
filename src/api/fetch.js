const URL = process.env.REACT_APP_API_BASE_URL;

// Shows

// Create
export function createShow(show) {
  return;
}

// Delete
export function destroyShow(id) {
  return;
}

// Index/Get all
export function getAllShows() {
  // will handle 2nd '.then' in another file; doing 1st '.then' to parse to JS and get the data
  return fetch(`${URL}/shows`).then((response) => response.json());
}

// Show/Get one
export function getOneShow(id) {
  return;
}

// Update
export function updateShow(id, show) {
  return;
}

// Movies

export function getAllMovies() {
  return;
}

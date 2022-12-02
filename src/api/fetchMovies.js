const URL = process.env.REACT_APP_API_BASE_URL;

// Shows

// Create
export function createShow(show) {
  const options = {
    method: "POST",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/Movies/`, options).then((response) => {
    return response.json();
  });
}

// Delete
export function destroyShow(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/Movies/${id}`, options);
}

// Index/Get all
export function getAllShows() {
  // return // src/api/fetch
  // Index/Get all
    return fetch(`${URL}/Movies`).then((response) => response.json());
  // }
}

// Show/Get one
export function getOneShow(id) {
  return fetch(`${URL}/Movies/${id}`).then((response) => response.json());
}

// Update
export function updateShow(id, show) {
  const options = {
    method: "PUT",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/Movies/${id}`, options).then((response) => {
    return response.json();
  });
}

// Movies

export function getAllMovies() {
  return;
}

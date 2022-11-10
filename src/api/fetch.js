// Shows + Movies API URL
const URL = process.env.REACT_APP_API_BASE_URL;

// Create
export function createShow(show) {
  const options = {
    method: "POST",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/shows`, options).then((res) => res.json());
}

export function createOne(media, object) {
  const options = {
    method: "POST",
    body: JSON.stringify(object),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/${media}`, options).then((res) => res.json());
}

// Delete
export function destroyShow(id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/shows/${id}`, options);
}

export function deleteItem(media, id) {
  const options = { method: "DELETE" };
  return fetch(`${URL}/${media}/${id}`, options);
}

// Index/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`).then((res) => res.json());
}

export function getAll(media) {
  return fetch(`${URL}/${media}`).then((res) => res.json());
}

// Get one
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((res) => res.json());
}

export function getOne(media, id) {
  return fetch(`${URL}/${media}/${id}`).then((res) => res.json());
}

// Update
export function updateShow(id, show) {
  const options = {
    method: "PUT",
    body: JSON.stringify(show),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${URL}/shows/${id}`, options).then((res) => res.json());
}

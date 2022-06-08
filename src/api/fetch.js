const URL = process.env.REACT_APP_API_BASE_URL;

export function getAllMovies() {
  return fetch(`${URL}/movies`).then((response) => response.json());
}

//this fetch is a GET (Read)
export function getAllShows() {
  return fetch(`${URL}/shows`).then((response) => response.json());
}

//create delete methods
//these are DELETE (Delete)
export function deleteShow(id) {
  const options = {
    method: "DELETE"
  }
  return fetch(`${URL}/shows/${id}`, options).then((response) => response.json());
}

export function deleteMovies(id) {
  const options ={
    method: "DELETE"
  }

  return fetch(`${URL}/movies/${id}`, options).then((response) => response.json());
}

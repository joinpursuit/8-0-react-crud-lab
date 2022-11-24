const URL = process.env.REACT_APP_API_BASE_URL;

// Create
export function createMovie(movie) {
    const options = {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {"Content-Type": "application/json" },
    };
    return fetch(`${URL}/movie/`,options).then((response) => {
    return  response.json();
    });
  }

// Index/Get all
export function getAllMovies() {
    return fetch(`${URL}/movie`).then((response) => response.json());
  }


  // Movie/Get one
export function getOneMovie(id) {
    return fetch(`${URL}/movie/${id}`).then((response) => response.json());
  }

  // Update
export function updateMovie(id, movie) {
    const options = {
      method: "PUT",
      body: JSON.stringify(movie),
      headers: { "Content-Type": "application/json" },
    };
    return fetch(`${URL}/movie/${id}`,options).then((response) => {
      return response.json();
    });
  }


// Delete
export function destroyMovie(id) {
    const options = { method: "DELETE" };
    return fetch(`${URL}/movie/${id}`,options);
  }  





  


// Shows
const URL = process.env.REACT_APP_API_BASE_URL

export function filterShows(search, shows) {
  return shows.filter((show) =>{
    return show.title.toLowerCase().match(search.toLowerCase())
  })
}

// Create
export function createShow(show) {
  return;
}

// Delete
export function destroyShow(id) {
  const options = {method: 'DELETE'}
  return fetch(`${URL}/shows/${id}` ,options)
}


// ShowIndex/Get all
export function getAllShows() {
 return fetch(`${URL}/shows`)
  .then(res => res.json())
  
}

// Show/Get one
export function getOneShow(id) {
  return fetch(`${URL}/shows/${id}`).then((res) => res.json())
}

// Update
export function updateShow(id, show) {
  return;
}

// MoviesIndex/Get All
export function getAllMovies() {
  // return fetch(`${URL}/movies`)
  // .then(res => res.json())
}

// Movie/Get one

//----Shows----///
const URL = process.env.REACT_APP_API_BASE_URL

// Create
export function createShow(show) {
  const options = {
method: "POST",
body: JSON.stringify(show),
headers: {"Content-Type": "application/json"},
  }
  return fetch(`${URL}/shows`, options)
    .then(res => res.json())
}

// ShowIndex/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`)
   .then(res => res.json())
   
 }
 
 export function filterShows(search, shows) {
  return shows.filter(show =>
    show.title.toLowerCase().match(search.toLowerCase())
  )
}

 // Show/Get one
 export function getOneShow(id) {
   return fetch(`${URL}/shows/${id}`).then(res => res.json())
 }

 // Update
export function updateShow(id, show) {
  const options = {
    method: "PUT",
    body: JSON.stringify(show),
    headers:{"Content-Type" : "application/json"},
  }
  return fetch(`${URL}/shows/${id}`, options)
    .then(res => res.json)
}

// Delete
export function destroyShow(id) {
  const options = {method: 'DELETE'}
  return fetch(`${URL}/shows/${id}` ,options)
}

///----Movies----///
// Create
export function createMovie(movie) {
  const options = {
    method: "POST",
    body: JSON.stringify(movie),
    headers: {"Content-Type": "application/json"},
      }
      return fetch(`${URL}/movies`, options)
        .then(res => res.json())
}

// MoviesIndex/Get All
export function getAllMovies() {
  return fetch(`${URL}/movies`)
  .then(res => res.json())
}
export function filterMovies(search, movies) {
  return movies.filter(movie => movie.title.toLowerCase().match(search.toLowerCase())
  )
}

// Movie/Get one
export function getOneMovie(id){
  return fetch(`${URL}/movies/${id}`)
        .then(res => res.json())
}

// Update
export function updateMovie(id, movie) {
  const options = {
    method: "PUT",
    body: JSON.stringify(movie),
    headers:{"Content-Type" : "application/json"},
  }
  return fetch(`${URL}/movies/${id}`, options)
    .then(res => res.json)
}

//destroy Movie
export function destroyMovie(id){
  const options = {method: 'DELETE'}
  return fetch(`${URL}/movies/${id}` ,options)
}
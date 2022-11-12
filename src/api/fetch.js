// Shows
const URL = process.env.REACT_APP_API_BASE_URL

// Create
export function createShow(show) {
  return;
}

// ShowIndex/Get all
export function getAllShows() {
  return fetch(`${URL}/shows`)
   .then(res => res.json())
   
 }
 
 export function filterShows(search, shows) {
  return shows.filter((show) =>{
    return show.title.toLowerCase().match(search.toLowerCase())
  })
}

 // Show/Get one
 export function getOneShow(id) {
   return fetch(`${URL}/shows/${id}`).then((res) => res.json())
 }

 // Update
export function updateShow(id, show) {
  return;
}

// Delete
export function destroyShow(id) {
  const options = {method: 'DELETE'}
  return fetch(`${URL}/shows/${id}` ,options)
}

///-----Movies------///
// Create
export function createMovie(movie) {
  return;
}

// MoviesIndex/Get All
export function getAllMovies() {
  return fetch(`${URL}/movies`)
  .then(res => res.json())
}
export function filterMovies(search, movies) {
  return movies.filter((movie) =>{
    return movie.title.toLowerCase().match(search.toLowerCase())
  })
}

// Movie/Get one
export function getOneMovie(id){
  return fetch(`${URL}/movies/${id}`)
        .then(res => res.json())
}

// Update
export function updateMovie(id, show) {
  return;
}

//destroy Movie
export function destroyMovie(id){
  const options = {method: 'DELETE'}
  return fetch(`${URL}/movies/${id}` ,options)
}
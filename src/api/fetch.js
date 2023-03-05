// Para acceder a las variables de entorno (variables definidas en el archivo .env) utilizamos la sintaxis
// process.env.MI_VARIABLE_DE_ENTORNO

const BASE_URL = process.env.REACT_APP_API_BASE_URL // "http://localhost:5001/api"

// VERBOS HTTP
// GET ==> OBTENER INFORMACION

// POST ==> CREAR UN RECURSO
// PUT ==> ACTUALIZAR UN RECURSO
// DELETE ==> ELIMINAR UN RECURSO

// Shows

// Create


// {
//   type: "",
//   title: "",
//   country: "",
//   dateAdded: "",
//   description: "",
//   duration: "",
//   listedIn: "",
//   rating: "",
//   releaseYear: "",
// }

// Index/Get all
export function getAllShows() {
  const request = fetch(`${BASE_URL}/shows`)
    .then(response => response.json())
    .then(showsList => showsList)

  return request
}

// Show/Get one
export function getOneShow(id) {
  const request = fetch(`${BASE_URL}/shows/${id}`)
    .then(response => response.json())
    .then(showData => showData)
    .catch(err => console.log('Error in get one show request'))

  return request;
}

export function createShow(show) {
  const request = fetch(`${BASE_URL}/shows`, {
    method: 'POST', // Indicamos el verbo HTTP que va a ejecutar esta funcion

    // El body es la DATA "TANGIBLE" de la peticion
    body: JSON.stringify(show),

    // Los headers son METAINFORMACION de la peticion
    headers: {
      'Content-Type': 'application/json'
    } 
  })
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.log('Error in show creation'))

  return request
}

// Update
export function updateShow(id, show) { //hago la peticion a un show dentro del conjunto de shows a traves de su id 
  // Piratas del caribe {
  //    id: PDC-001,
  //    title: marineros
  //}
  //
  // .../shows/PDC-001
  // .../shows/:id
  const request = fetch(`${BASE_URL}/shows/${id}`, {
    method: 'PUT',
    body: JSON.stringify(show),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.log('Error in show updating'))

  return request
}

// Delete
export function destroyShow(id) {
  const request = fetch(`${BASE_URL}/shows/${id}`, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.log('Error in show deletion'))

  return request
}

// Movies
// ===================================================================
export function getAllMovies() {
  const request = fetch(`${BASE_URL}/movies`)
    .then(response => response.json())
    .then(moviesList => moviesList)
    .catch(err => console.log('Error in movies request'))
  
  return request
}

export function getOneMovie(id) {
  const request = fetch(`${BASE_URL}/movies/${id}`)
    .then(response => response.json())
    .then(movieData => movieData)
    .catch(err => console.log('Error in get one movie request'))

  return request;
}
///////////////////////////////////

// TODO: define createMovie function

export function createMovie(movie) {
  const request = fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    body: JSON.stringify(movie),
    headers: {
      'Content-Type': 'application/json'
    }     
  })
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.log('Error in show creation'))

  return request
}


// // TODO: define Update function
export function updateMovie(id, movie) {
  const request = fetch(`${BASE_URL}/movies/${id}`, {
    method: 'PUT',
    body: JSON.stringify(movie),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.log('Error in show updating'))

  return request
}

// // TODO: define Delete function


export function destroyMovie(id) {
  const request = fetch(`${BASE_URL}/movies/${id}`, { method: 'DELETE' })
  .then(response => response.json())
  .then(data => data)
  .catch(err => console.log('Error in show deletion'))
  
  return request

}



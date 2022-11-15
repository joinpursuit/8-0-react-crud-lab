const server_url = "http://150.230.113.32:5001/api/";
const options_base = {mode: 'cors', }// no-cors, *cors, same-originß
// Create
export function createShow(show,entry="shows") {
  let options = {
    ...options_base,
    method: 'POST', 
    body : JSON.stringify(show), 
    headers: { 'Content-Type': 'application/json'}
  };
  return fetch(`${server_url}${entry}/`,options).then(response => response.json());
}

// Delete
export function destroyShow(id,entry="shows") {
  let options = {...options_base,method: 'DELETE'};
  return fetch(`${server_url}${entry}/${id}`,options).then(response => response.json());
}

// Index/Get all
export function getAllShows(entry="shows") {
  return fetch(`${server_url}${entry}/`).then(response => response.json());
}

// Show/Get one
export function getOneShow(id,entry="shows") {
  return fetch(`${server_url}${entry}/${id}`,options_base).then(response => response.json());
}

// Update
export function updateShow(id, show,entry="shows") {
  let options = {
    ...options_base,
    method: 'PUT', 
    body : JSON.stringify(show), 
    headers: { 'Content-Type': 'application/json'}
  };
  return fetch(`${server_url}${entry}/${id}`,options).then(response => response.json());
}

// Movies

export function getAllMovies() {
  return;
}

export let entry_api = {
  show:{
    create :(content)=>createShow(content),
    destroy:(id)=>destroyShow(id),
    getAll :()=>getAllShows(),
    getOne :(id)=>getOneShow(id),
    update :(id,content)=>updateShow(id,content),
  },
  movie:{
    create :(content)=>createShow(content,"movies"),
    destroy:(id)=>destroyShow(id,"movies"),
    getAll :()=>getAllShows("movies"),
    getOne :(id)=>getOneShow(id,"movies"),
    update :(id,content)=>updateShow(id,content,"movies"),
  }
}

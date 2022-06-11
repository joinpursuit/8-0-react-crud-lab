import React from "react";
import { useParams, useHistory } from "react-router-dom"
import Error from "../common/Error";



export default function Movies({movies}){
     // console.log(movies.title)
     const { id } = useParams();
     const history = useHistory();
 
     const movie = movies.find((movie) => movie.id === id)
     // console.log(id)
     console.log(movie)
     const handleClick = () => {
         history.push("/movies")
     }
     if(!movie) {
         return (
             <Error/>
         )
 
     }
     return (
         <section className="movies-movie-wrapper">
             <h2>{movie.title}</h2>
             <section className="movies-movie">
                 <aside>
                     <p><span>Duration: </span>{movie.duration}</p>
                     <p><span>Listed Categories: </span>{movie.listedIn}</p>
                     <p><span>Country: </span>{movie.country} </p>
                     <p><span>Rating: </span>{movie.rating}</p>
                     <p><span>Date added: </span>{movie.releaseYear}</p>
                 </aside>
                 <article>
                     <p>{movie.description} </p>
                 </article>
                 <aside><button onClick={handleClick} className="delete">Back</button></aside>
             </section>
         </section>
     )
}
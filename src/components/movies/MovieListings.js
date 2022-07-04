import React from 'react'
 import { Link } from 'react-router-dom'
 import './MovieListings.css'


 export default function MovieListings({movie}) {
   const { title, description, duration, id, listedIn} = movie
     return (
    <article className="show">
       <h3 className="title">
         <Link to={`/movies/${id}`}>{title}</Link>
       </h3>
       <p className="description">{description}</p>
       <aside className="details">
         <p>
           <span>Listed Categories:</span> {listedIn}
         </p>
         <p>
           <span>Duration:</span> {duration}
         </p>
       </aside>
     </article>
   )
 }
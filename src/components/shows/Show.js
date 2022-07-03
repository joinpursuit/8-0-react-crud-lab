import React from 'react'
import { useParams, useHistory } from 'react-router-dom';
import "./Show.css"
import Error from '../common/Error';


export default function Show({shows,handleDelete}) {
  const { id } = useParams()
  const show = shows.find((show) => show.id === id)
  const history = useHistory()

  const handleClick = () => {
    history.push("/shows")
  }
  

  console.log(id)
  return (
    <section className="shows-show-wrapper">
      {!show ? (<Error />) : (
        <>
      <h2>{show.title}</h2>
      <section className="shows-show">
        <aside>
          <p>
            <span>Duration:</span> {show.duration}
          </p>
          <p>
            <span>Listed Categories:</span> {show.listedIn}
          </p>
          <p>
            <span>Country:</span>{show.country}
          </p>
          <p>
            <span>Rating:</span> {show.rating}
          </p>
          <p>
            <span>Date Added:</span> {show.releaseYear}
          </p>
        </aside>
        <article>
          <p>{show.description}</p>
        </article>
        <aside>
          <button value={id} onClick={handleDelete}class="delete">Remove show</button>
        </aside>
        <aside>
          <button onClick={handleClick} class="goback">Go Back</button>
          </aside>
      </section>
      </>
     )}
    </section>
  );
}

import React from "react"
import { useParams, useHistory } from "react-router-dom"
import Error from "../common/Error";

export default function Show({ shows }) {
    // console.log(shows.title)
    const { id } = useParams();
    const history = useHistory();

    const show = shows.find((show) => show.id === id)
    // console.log(id)
    console.log(show)
    const handleClick = () => {
        history.push("/shows")
    }
    if(!show) {
        return (
            <Error/>
        )
    }
    return (
        <section className="shows-show-wrapper">
            <h2>{show.title}</h2>
            <section className="shows-show">
                <aside>
                    <p><span>Duration: </span>{show.duration}</p>
                    <p><span>Listed Categories: </span>{show.listedIn}</p>
                    <p><span>Country: </span>{show.country} </p>
                    <p><span>Rating: </span>{show.rating}</p>
                    <p><span>Date added: </span>{show.releaseYear}</p>
                </aside>
                <article>
                    <p>{show.description} </p>
                </article>
                <aside><button onClick={handleClick} className="delete">Back</button></aside>
            </section>
        </section>
    )
}
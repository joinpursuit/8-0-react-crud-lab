import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './Show.css';
import Error from '../common/Error';

export default function Show({ shows, handleDelete }) {
    const { id } = useParams() //> Matchs show id selected
    const history = useHistory(); 
    // const navigate = useNavigate()

    const show = shows.find((show) => show.id === id); //> we isolate the specified show object
    const handleClick = () => {
        history.push("/shows") 
        // navigate("/shows")
    }

    return (
        <section className="shows-show-wrapper">
            {!show ? (
                <Error />
            ) : (
                <>
            <h2>{show.title}</h2>
            <section className="shows-show">
                <aside>
                    <p><span>Duration:</span> {show.duration}</p>
                    <p><span>Listed Categories:</span> {show.listedIn}</p>
                    <p><span>Country:</span> {show.country}</p>
                    <p><span>Rating:</span> {show.rating}</p>
                    <p><span>Date Added:</span> {show.dateAdded}</p>
                </aside>
                <article>
                    <p>{show.description}</p>
                </article>
                <aside>
                    <button onClick={handleClick} className="goBack">Go Back</button>
                </aside>
                <aside>
                    <button value={id} onClick={handleDelete} className="delete">Delete</button>
                </aside>
            </section>
            </>
            )}
        </section>
    )
}

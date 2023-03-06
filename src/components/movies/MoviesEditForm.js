import { useState, useEffect, LabelHTMLAttributes } from "react";
import { useNavigate, useParams } from "react-router-dom";  
import { updateMovie, getOneMovie } from "../../api/fetch";
import "./ShowsForm.css"

export default function ShowsForm() {
    const [movie, setMovie] = useState({
        type: "",
        title: "",
        country: "",
        dateAdded: "",
        description: "",
        duration: "",
        listedIn: "",
        rating: "",
        releaseYear: "",
    });

    let navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        getOneMovie(id).then((response) => {
            setMovie(response)
        }).catch((error) => {
            console.log(error)
        })
    }, [id])

    function handleSubmit(event){
        event.preventDefault()

        updateMovie(id, movie)
            .then((response) => {
                console.log(response)
                navigate(`/movies/${id}`)
            }).catch((error) => {
                console.log(error)
            });
    }

    function handleTextChange(event) {
        setMovie({
            ...movie,
            [event.target.id]: event.target.value,
        });
    }

    return (
        // <form onSubmit={handleSubmit}>
        //     <label htmlFor="title">Title:</label>
        //     <input
        //         type="text"
        //         id="title"
        //         value={movie.title}
        //         onchange={handleTextChange}
        //         />

        //     <label
        // htmlFor="description">Description:</label>
        // <input 
        //     type="text"
        //     id="description"
        //     value={show.description}
        //     onChange={handleTextChange}
        //     />
    );
}
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getOne } from "../../api/fetch";

import MovieForm from "./MovieForm";

export default function MoviesEditForm() {
  const [movie, setMovie] = useState({
    type: "Movie",
    title: "",
    country: "",
    dateAdded: "",
    releaseYear: "",
    rating: "",
    duration: "",
    listedIn: "",
    description: "",
  });

  const { id } = useParams();

  useEffect(() => {
    getOne("movies", id).then((res) => setMovie(res));
  }, [id]);

  return <MovieForm movie={movie} setMovie={setMovie} isEdit={true} id={id} />;
}

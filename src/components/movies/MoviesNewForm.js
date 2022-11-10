import { useState } from "react";

import MovieForm from "./MovieForm";

export default function MoviesNewForm() {
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
  return <MovieForm movie={movie} setMovie={setMovie} isEdit={false} />;
}

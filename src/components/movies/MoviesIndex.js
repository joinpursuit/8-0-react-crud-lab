import { useState, useEffect } from "react";
import ErrorMessage from "../errors/ErrorMessage";

import { getAllMovies } from "../../api/fetch";

export default function MoviesIndex() {
  const [loadingError, setLoadingError] = useState();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((response) => {
        setMovies(response);
        setLoadingError(false);
      })
      .catch((error) => {
        console.log(error);
        setLoadingError(true);
      });
  }, []);

  return (
    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section>
          <h3>Amount: {movies.length}</h3>
          {movies.map((movie) => (
            <div style={{ textAlign: "center" }}>
              <h4>{movie.title}</h4>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

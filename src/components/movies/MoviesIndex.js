import { useState } from "react";
import ErrorMessage from "../errors/ErrorMessage";

export default function MoviesIndex() {
  const [loadingError, setLoadingError] = useState();

  return (
    <div>
      {loadingError ? (
        <ErrorMessage />
      ) : (
        <section>
          <he>All Movies</he>
        </section>
      )}
    </div>
  );
}

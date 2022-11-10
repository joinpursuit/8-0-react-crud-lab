import { useNavigate } from "react-router-dom";
import "./MovieListing.css";

export default function MovieListing({
  title,
  description,
  listedIn,
  duration,
  id,
}) {
  const navigate = useNavigate();
  return (
    <article
      className="movie-listing"
      onClick={() => navigate(`/movies/${id}`)}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <hr />
      <p>
        <span>Listed Categories: </span>
        {listedIn}
      </p>
      <p>
        <span>Duration: </span>
        {duration ? duration : "unavailable"}
      </p>
    </article>
  );
}

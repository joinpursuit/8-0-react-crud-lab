import "./MovieListing.css";
import { Link } from "react-router-dom"
const MovieListing = (props) => {
    const { title, description, duration, id, listedIn } = props.movie
  return (
    <article className="show">
      <h3 class="title">
        <Link to={`/movies/${id}`}>{ title }</Link>
      </h3>
      <p className="description">{ description }</p>
      <aside className="details">
        <p>
          <span>Listed Categories:</span> { listedIn}
        </p>
        <p>
          <span>Duration:</span> { duration }
        </p>
      </aside>
    </article>
  );
}
export default MovieListing
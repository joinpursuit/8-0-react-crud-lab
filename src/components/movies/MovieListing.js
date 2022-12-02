import {Link} from 'react-router-dom'
import "../shows/ShowListing.css";

export default function MovieListing({ movies }) {
  return (
    <article className="show">
      <h3 className="title">
        <Link to={`/movies/${movies.id}`}>{movies.title}</Link>
      </h3>
      <p className="description">{movies.description}</p>
      <aside className="details">
        <p>
          <span>Listed Categories:</span>
          {movies.listedIn}
        </p>
        <p>
          <span>Duration:</span> {movies.duration}
        </p>
      </aside>
    </article>
  );
}

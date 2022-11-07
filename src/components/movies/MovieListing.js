import "./MovieListing.css"

export default function MovieListing({
  title,
  description,
  listedIn,
  duration,
}) {
  return (
    <article className="movie-listing">
      <h3>{title}</h3>
      <p>{description}</p>
      <hr />
      <p>
        <span>Listed Categories: </span>
        {listedIn}
      </p>
      <p>
        <span>Duration: </span>
        {duration? duration :"unavailable"}
      </p>
    </article>
  );
}

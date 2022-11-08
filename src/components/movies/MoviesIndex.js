import { useEffect, useState } from "react";
import { getAllMovies } from "../../api/fetch"
import { Link } from "react-router-dom";
import MovieListing from "./MovieListing";
import "./ShowsIndex.css"


export default function MoviesIndex() {
  
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("")

function handleTextChange(event) {
  const title = event.target.value;
  const result = title.length ? filterMovies(title, allMovies) : allMovies

  setSearchTitle(title)
  setMovies(result)
}

  useEffect(() => {
    getAllMovies().then((response) => {
      setAllMovies(response)
      setMovies(response)
    }).catch((error) => {
      console.error(error)
    })
  }, []);


  function filterMovies(search, movies) {
    return movies.filter((movie) => {
      return movie.title.toLowerCase().match(search.toLowerCase());
    })
  }
  
  return (
    <div>

<section className="shows-index-wrapper">
<h2>All Movies</h2>
<button>
  <Link to="/movies/new">Add a new movie</Link>
</button>
</section>
<br/>
<label htmlFor="searchTitle">
  Search Movies:
  <input
  type="text"
  value={searchTitle}
  id="searchTitle"
  onChange={handleTextChange}/>
</label>
<section className="shows-index">
{movies.map((movie) => {
  return <MovieListing movie={movie} key={movie.id} />
})}
</section>
</div>
  )
}

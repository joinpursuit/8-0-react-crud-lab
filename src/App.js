import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import Nav from "./components/common/Nav";
import Show from "./components/shows/Show";
import ShowsEditForm from "./components/shows/ShowsEditForm";
import ShowsIndex from "./components/shows/ShowsIndex";
import ShowsNewForm from "./components/shows/ShowsNewForm";
import MoviesIndex from "./components/movies/MoviesIndex";
import Movie from "./components/movies/Movie";
import MovieForm from "./components/movies/MovieForm";
import EditMovieForm from "./components/movies/EditMovieForm";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<ShowsIndex />} />
          <Route path="/shows/new" element={<ShowsNewForm />} />
          <Route path="/shows/:id" element={<Show />} />
          <Route path="/shows/:id/edit" element={<ShowsEditForm />} />

          {/* Movie Routes */}
          {/* route for all movies */}
          <Route path = "/movies" element = {<MoviesIndex />} />

          {/* route for individual movie  */}
          <Route path = "/movies/:movieId" element = {<Movie />} />

          {/* route for new Movie Form */}
          <Route path = "/movies/new" element = {<MovieForm />}/>

          {/* route for edit individual movie */}
          <Route path = "/movies/:movieId/edit" element = {<EditMovieForm />}/>

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

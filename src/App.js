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
import Movies from "./components/movies/Movies.js"
import MoviesNewForm from "./components/movies/MoviesNewForm";
import ShowMovieForm from "./components/movies/ShowMovieForm";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Nav />{" "}
        {/**nav and footer remains a static element throughout navigating the app */}
        <Routes>
          {" "}
          {/**remember all static elements not used for routing  remain outide of it's elements tags */}
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<ShowsIndex />} />
          {/**crate a route for movies here */}
          <Route path="/shows/new" element={<ShowsNewForm />} />
          <Route path="/shows/:id" element={<Show />} />
          <Route path="/shows/:id/edit" element={<ShowsEditForm />} />
          
          <Route path="/movies" element={<MoviesIndex />} />
          <Route path="/movies/:id" element={<Movies />} />
          <Route path="/movies/new" element={<MoviesNewForm />} />
          <Route path="/movies/:id/edit" element={<ShowMovieForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

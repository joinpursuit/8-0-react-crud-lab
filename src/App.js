import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import Nav from "./components/common/Nav";
import Movie from "./movies/Movie";
import MoviesEditForm from "./movies/MoviesEditForm";
import MoviesIndex from "./movies/MoviesIndex";
import MoviesNewForm from "./movies/MoviesNewForm";
import Show from "./shows/Show";
import ShowsEditForm from "./shows/ShowsEditForm";
import ShowsIndex from "./shows/ShowsIndex";
import ShowsNewForm from "./shows/ShowsNewForm";

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
          <Route path="/movies" element={<MoviesIndex />} />
          <Route path="/movies/new" element={<MoviesNewForm />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/movies/:id/edit" element={<MoviesEditForm />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

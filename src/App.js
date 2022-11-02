import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import Nav from "./components/common/Nav";
import Show from "./components/shows/Show";
import ShowsEditForm from "./components/shows/ShowsEditForm";
import ShowsIndex from "./components/shows/ShowsIndex";
import ShowsNewForm from "./components/shows/ShowsNewForm";
// import Movie from "./components/shows/Show";
// import MoviesEditForm from "./components/shows/ShowsEditForm";
import MoviesIndex from "./components/movies/MoviesIndex";
// import MoviesNewForm from "./components/shows/ShowsNewForm";

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
          {/* <Route path="/movies/new" element={<ShowsNewForm />} /> */}
          {/* <Route path="/movies/:id" element={<Show />} /> */}
          {/* <Route path="/movies/:id/edit" element={<ShowsEditForm />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

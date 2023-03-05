import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import Nav from "./components/common/Nav";
import ShowsIndex from "./components/shows/ShowsIndex";
import ShowsNewForm from "./components/shows/ShowsNewForm";
import Show from "./components/shows/Show";
import ShowsEditForm from "./components/shows/ShowsEditForm";
// //////////////////////////////////////////////////////////
import MoviesIndex from "./components/movies/MoviesIndex";
import MoviesNewForm from "./components/movies/MoviesNewForm";
import MoviesEditForm from "./components/movies/MoviesEditForm";
import MoviesShowOne from "./components/movies/MoviesShowOne";





function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/shows" element={<ShowsIndex />} />
          <Route path="/shows/new" element={<ShowsNewForm />} />
          <Route path="/shows/:id" element={<Show />} />
          <Route path="/shows/:id/edit" element={<ShowsEditForm />} />

          <Route path="/movies" element={<MoviesIndex />} />
          <Route path="/movies/new" element={<MoviesNewForm />} />
          <Route path="/movies/:id" element={<MoviesShowOne />} />
          <Route path="/movies/:id/edit" element={<MoviesEditForm />} />

        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

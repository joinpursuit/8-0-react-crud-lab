import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
// Components
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import Nav from "./components/common/Nav";
import Show from "./components/shows/Show";
import ShowsEditForm from "./components/shows/ShowsEditForm";
import ShowsIndex from "./components/shows/ShowsIndex";
import ShowsNewForm from "./components/shows/ShowsNewForm";

function App() {
  return (
    <div className="wrapper">
      <React.StrictMode>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shows" element={<ShowsIndex  entry="show" />} />
            <Route path="/shows/new" element={<ShowsNewForm entry="show" />} />
            <Route path="/shows/:id" element={<Show entry="show" />} />
            <Route path="/shows/:id/edit" element={<ShowsEditForm entry="show" />} />
{/* /////////////////////////////////////////// */}
            <Route path="/movies" element={<ShowsIndex  entry="movie" />} />
            <Route path="/movies/new" element={<ShowsNewForm entry="movie" />} />
            <Route path="/movies/:id" element={<Show entry="movie" />} />
            <Route path="/movies/:id/edit" element={<ShowsEditForm entry="movie" />} />
{/* /////////////////////////////////////////// */}

          </Routes>
          <Footer />
        </Router>
      </React.StrictMode>
    </div>
  );
}

export default App;

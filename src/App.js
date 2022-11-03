import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// Components
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import Nav from "./components/common/Nav";
import Show from "./components/shows/Show";
import ShowsEditForm from "./components/shows/ShowsEditForm";
import ShowsIndex from "./components/shows/ShowsIndex";
import ShowsNewForm from "./components/shows/ShowsNewForm";
import MoviesIndex from "./components/movies/MoviesIndex";
import  Movie  from "./components/movies/Movie";

function App() {
  const [loadingError, setLoadingError] = useState(false);
  //This might need to be a higher state option.

  const { id } = useParams();
  const navigate = useNavigate()

  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          {/* Show Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/shows" element={<ShowsIndex />} />
          <Route path="/shows/new" element={<ShowsNewForm />} />
          <Route path="/shows/:id" element={
          <Show 
          loadingError={loadingError}
          setLoadingError={setLoadingError}
          id={id}
          navigate={navigate}/>
          } />
          <Route path="/shows/:id/edit" element={<ShowsEditForm />} />
          <Route path="/movies/:id" element={
          <Movie
          loadingError={loadingError}
          setLoadingError={setLoadingError}
          id={id}
          navigate={navigate}
          />
          } />
          {/* Movie Routes */}
          {/* <Route path='/movies' element={<MoviesIndex/>} /> */}
          {/* <Route path="/shows/new" element={<ShowsNewForm />} /> */}
          {/* <Route path="/shows/:id/edit" element={<ShowsEditForm />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
//Routes for movies go in here. 
export default App;

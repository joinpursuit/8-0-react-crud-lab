import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import Nav from "./components/common/Nav";
import IndexPage from "./components/reusedComponents/IndexPage";
import DisplayIndividualInfo from "./components/reusedComponents/DisplayIndividualInfo";
import Form from "./components/reusedComponents/Form";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />

          {/* SHOWS ROUTES */}
          <Route path="/shows" element={<IndexPage endpoint = {`shows`} />} />
          <Route path="/shows/new" element={<Form endpoint = {`shows`} />} />
          <Route path="/shows/:id" element={<DisplayIndividualInfo endpoint = {`shows`} />} />
          <Route path="/shows/:id/edit" element={<Form endpoint= {`shows`} edit = {true} />} />

          {/* MOVIE ROUTES*/}
          {/* route for all movies */}
          <Route path = "/movies" element = {<IndexPage endpoint = {`movies`} />} />
          {/* route for new Movie Form */}
          <Route path = "/movies/new" element = {<Form endpoint = {`movies`} />}/>
          {/* route for individual movie  */}
          <Route path = "/movies/:id" element = {<DisplayIndividualInfo endpoint = {`movies`} />} />
          {/* route for edit individual movie */}
          <Route path = "/movies/:id/edit" element = {<Form endpoint= {`movies`} edit = {true} />}/>
        

        </Routes>

        <Footer />

      </Router>
    </div>
  );
}

export default App;

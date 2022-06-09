import React from "react";
import { Route, Switch } from "react-router-dom";
import ErrorMessage from "./components/common/ErrorMessage";
// Components
import Nav from "./components/common/Nav";
import Home from "./components/home/Home";
import ShowsIndex from "./components/shows/ShowsIndex";
import MoviesIndex from "./components/movies/MoviesIndex";
import Footer from "./components/common/Footer";

const App = () => (
  <div className="wrapper">
    <Nav />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/shows">
        <ShowsIndex />
      </Route>
      <Route path="/movies">
        <MoviesIndex />
      </Route>
      <Route path="*">
      <ErrorMessage />
      </Route>
    </Switch>
    <Footer />
  </div>
);

export default App;

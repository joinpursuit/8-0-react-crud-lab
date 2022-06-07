import React from "react";
import MovieListing from "./MovieListing";
import Movie from "./Movie";
import './MoviesIndex.css';
// import Error from "../common/Error";

// Helper functions
import { getAllMovies } from "../../api/fetch";
import { Switch, Route } from "react-router-dom";

class MoviesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loadingError: false,
    };
  }

  componentDidMount() {
    getAllMovies()
      .then((movies) => this.setState({ movies, loadingError: false }))
      .catch((error) => {
        console.error(error);
        this.setState({ loadingError: true });
      });
  }

  render() {
    return (
      <Switch>
        {/* The below route is for when we click on a specific movie link! */}
        <Route path="/movies/:id"> 
          <Movie movies={this.state.movies} />
        </Route>
      <section className="movies-index-wrapper">
        <h2>All movies</h2>
        {/* <!-- movieListing components --> */}
        <section className="movies-index">
          {this.state.movies.map((movie) => {
            // console.log(movie)
            return <MovieListing movie={ movie } key={ movie.id }/>
          })}
        </section>
      </section>
      </Switch>
    )
  }
}

export default MoviesIndex;
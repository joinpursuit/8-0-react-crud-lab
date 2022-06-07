import React from "react";

// Helper functions
import { getAllMovies } from "../../api/fetch";
import MovieListing from "./MovieListing";
import Movie from "./Movie";
import Error from "../common/Error";
import {Switch, Route} from "react-router-dom";

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
      <Route path="/movies/:id">
        <Movie movies={this.state.movies} />
      </Route>
      <section className="movies-index-wrapper">
        <h2>All Movies</h2>
        <section className="movies-index">
          {this.state.loadingError ? (
            <Error />
          ) : (
            this.state.movies.map((movie) => {
              return <MovieListing movie={movie} key={movie.id} />;
            })
          )}
        </section>
      </section>
    </Switch>
    )
  }
}

export default MoviesIndex;

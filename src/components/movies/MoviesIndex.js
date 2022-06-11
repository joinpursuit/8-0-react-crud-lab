import React from "react";
import Error from "../common/Error";
// Helper functions
import { getAllMovies } from "../../api/fetch";
import MovieListing from "./MovieListing"
import Movies from "./Movies"
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";


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
    return(
<div>
  <Switch>
    <Route path="/movies/:id">
      <Movies movies={this.state.movies}/>
    </Route>

    <Route>
      <section className="movies-index-wrapper">
      <h2>All Movies</h2>
          <section className="movies-index">
            {this.state.movies.map((movie) => {
              return <MovieListing
                movie={movie}
                id={movie.id}
                title={movie.title}
                description={movie.description}
                duration={movie.duration}
                listedIn={movie.listedIn}
                rating={movie.rating}
                key={movie.id} />
            })}
          </section>
      </section>
    </Route>
  </Switch>
</div>

    ) 
  }
}

export default MoviesIndex;

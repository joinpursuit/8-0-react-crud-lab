import React from "react";
import { Switch, Route, withRouter} from "react-router-dom";
// Helper functions
import { getAllMovies } from "../../api/fetch";
import { deleteMovie } from "../../api/fetch";
import MovieListing from "./MovieListing";
import ErrorMessage from "../common/ErrorMessage";
import Movie from "./Movie";
import "./MoviesIndex.css";


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

  handleDelete(e){
    const { value } = e.target;
    try {
      deleteMovie(value);
      const indToDelete = this.state.movies.findIndex((movie) => {
        return movie.id === value;
      });
      const newShows = [...this.state.movies];
      newShows.splice(indToDelete, 1);
      this.setState({
        movies: newShows,
      });
      this.props.history.push("/movies");
      
    } catch (err) {
      this.setState({ loadingError: true });
    }
  }

  render() {
    if (this.state.loadingError) {
      return (
        <>
          <ErrorMessage />
        </>
      );
    }
    return (
      <Switch>
        <Route path='/movies/:id'>
          <Movie movies={this.state.movies} handleDelete={this.handleDelete} />
        </Route>
        <Route>
          <section className='shows-index-wrapper'>
            <h2> All Movies</h2>
            <section className='shows-index'>
              {this.state.movies.map((movie) => (
                <MovieListing movie={movie} key={movie.id} />
              ))}
            </section>
          </section>
        </Route>
      </Switch>
    );
  }
}

export default withRouter(MoviesIndex);

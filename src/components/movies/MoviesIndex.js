import React from "react";
import MovieListing from "./MovieListing";
import Movie from "./Movie";
import './MoviesIndex.css';
import Error from '../common/Error.js'

// Helper functions
import { getAllMovies } from "../../api/fetch";
import { deleteMovie } from "../../api/fetch";
import { Switch, Route, withRouter } from "react-router-dom";

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

  handleDeleteMovie = (e) => {
    const { value } = e.target
    try {
      deleteMovie(value);
      const indToDelete = this.state.movies.findIndex(movie => {
        return movie.id === value
      })
      const newMovies = [...this.state.movies];
      newMovies.splice(indToDelete, 1);
      this.setState({
        movies:newMovies
      })
      this.props.history.push("/movies")
    } catch (err) {
      console.error(err);
      this.setState({ loadingError: true });
    }
  }

  render() {
    if (this.state.loadingError) {
      return < Error />
    }
    return (
      <Switch>
        <Route path="/movies/:id"> 
          <Movie movies={this.state.movies} handleDeleteMovie={this.handleDeleteMovie} />
        </Route>
      <section className="movies-index-wrapper">
        <h2>All Movies</h2>
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

export default withRouter(MoviesIndex);

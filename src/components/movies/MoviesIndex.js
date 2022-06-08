import React from "react";
import Movie from "./Movie"
import MovieListing from "./MovieListing"
import { Route, Switch, withRouter } from 'react-router-dom';
// import ErrorMessage from "../common/error";
import './MoviesIndex.css'

// Helper functions
import { getAllMovies, deleteMovie } from "../../api/fetch";

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

  handleDelete = (event) => {
    const id = event.target.value
    try { 
      deleteMovie(id)
      .then(() => { 
        const index = this.state.movies.findIndex(movie =>  id === movie.id)
        const updatedMovies = [...this.state.movies]
        updatedMovies.splice(index, 1)
        this.setState({
          movies:updatedMovies
        })
        this.props.history.push("/movies")  
    })}
    catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
    <Switch>
      <Route path="/movies/:id">
          <Movie movies= { this.state.movies } handleDelete= { this.handleDelete }/>
      </Route>
    <section className="movies-index-wrapper">
  <h2>All Movies</h2>
  <section className="movies-index">
    {this.state.movies.map((movie) => { 
      return <MovieListing  movie={ movie } key={ movie.id }/>
    })}
  </section>
</section>
  </Switch>
    )
  }
}

export default withRouter(MoviesIndex);

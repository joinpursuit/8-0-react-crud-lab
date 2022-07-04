import React from "react";
import Error from '../common/Error'
import Movie from './Movie'

import { deleteMovie,getAllMovies } from "../../api/fetch";
import MovieListings from './MovieListings'
import { Switch, Route, withRouter } from 'react-router-dom'
import './MoviesIndex.css'



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
    const { id } = event.target.value
    try {
      deleteMovie(id)
        .then(() => {
          const index = this.state.movies.findIndex(movie => movie.id === id)
          const updateMovies = [...this.state.movies]
          updateMovies.splice(index, 1)
          this.setState({ movies: updateMovies })
        })
      this.props.history.push('/movies')
    } catch (err) {
      console.log(err)
      this.setState({ loadingError: true })
    }
  }
  render() {
    if (this.state.loadingError) {
      return <Error/>
    }
    return(
     <Switch>
        <Route path="/movies/:id">
          <Movie movies={this.state.movies} handleDelete={this.handleDelete} />
        </Route>
        <section className="shows-index-wrapper">
          <h2>All Movies</h2>
          <section className="shows-index">
            {this.state.movies.map((movie) => {
              return <MovieListings movie={movie} key={movie.id} />;
            })}
          </section>
        </section>
      </Switch>
    );
  }
}

export default withRouter(MoviesIndex);
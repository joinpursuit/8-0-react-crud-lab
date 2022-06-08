import React from "react";

// Helper functions
import { deleteMovie, getAllMovies } from "../../api/fetch";
import MovieListings from "./MovieListings";
import { Switch, Route, withRouter } from "react-router-dom";
import Movie from "./Movie";
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
    const id = event.target.value
    try {
      deleteMovie(id)
        .then(() => {
          const index = this.state.movies.findIndex(movie => movie.id === id)
          const updatesMovies = [...this.state.movies];
          updatesMovies.splice(index, 1)
          this.setState({
            movies:updatesMovies
          })
          this.props.history.push('/movies')  // -- old V5 way to navigate back in class components, uses withRouter (after deleting)
          // navigate("/movies") -- new v6 way to navigate back, uses useNavigate hook (after deleting)
        })
    }catch(err) {
      console.log(err)
    }
  }

  render() {
    return (
      <Switch>
        <Route path="/movies/:id">
          <Movie movies={this.state.movies} handleDelete={this.handleDelete} />
        </Route>
        <section className="movies-index-wrapper">
          <h2>All Movies</h2>
          <section className="movies-index">
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

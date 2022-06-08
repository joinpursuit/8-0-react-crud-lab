import React from "react";

// Helper functions
import { getAllMovies } from "../../api/fetch";
import MovieListing from "./MovieListing";
import Movie from "./Movie";
import Error from "../common/Error";
import {Switch, Route, withRouter} from "react-router-dom";
import { deleteMovies } from "../../api/fetch";

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

  handleDelete = (e) =>{
    const {value} = e.target;
    try{
      deleteMovies(value)
      .then(()=>{
        const updatedMovies = [...this.state.movies];
        const index = this.state.movies.findIndex(movie => movie.id === value);
        updatedMovies.splice(index, 1)
        this.setState({
          movies: updatedMovies
        })
        this.props.history.push("/movies")
      })
    }catch(err){
      console.log(err)
    }
  }

  render() {
    return (
    <Switch>
      <Route path="/movies/:id">
        <Movie movies={this.state.movies} handleDelete={this.handleDelete}/>
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

export default withRouter(MoviesIndex);

import React from "react";

// Helper functions
import { getAllMovies, deleteMovie } from "../../api/fetch";
import MovieListing from "./MovieListing";
import Movie from "./Movie";
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


  handleDelete = (event) => {
    const id = event.target.value//get the id of the movie
    try {
      deleteMovie(id)
      .then((data)=>{
        console.log(data)
        const index = this.state.movies.findIndex (movie => movie.id === id) // find the index of the movie so we can use the index to delete. 
        const updatedmovies = [...this.state.movies]; //use a varaible to store the new updated(the one with the deleted movie arr )
        updatedmovies.splice(index,1)//actually delete the movie.
        this.setState({
          movies: updatedmovies //replace it with the new edied arr. 
        })
        this.props.history.push("/movies")
        //do state stuff here.
        //also navigate after - 
      })
  
    } catch (err) {
      console.log(err)
    }
  
  }
  


  render() {
    return (
      <Switch>
        <Route path="/movies/:id">
          <Movie movies={this.state.movies} handleDelete= {this.handleDelete}/>
        </Route>

        <section className="shows-index-wrapper">
          <h2>All Movies</h2>
          <section className="shows-index"></section>
          {this.state.movies.map((movie) => {
            return <MovieListing movie={movie} key={movie.id} />;
          })}
        </section>
      </Switch>

    )
  }
}

export default withRouter(MoviesIndex);

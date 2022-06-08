import React from "react";
import ShowListing from './ShowListing';
// import ErrorMessage from "../common/error";
import { Route, Switch, withRouter } from 'react-router-dom';
import Show from './Show';

// Helper functions
import { getAllShows, deleteShow } from "../../api/fetch";

class ShowsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      loadingError: false,
    };
  }

  componentDidMount() {
    getAllShows()
      .then((shows) => this.setState({ shows, loadingError: false }))
      .catch((error) => {
        console.log(error)
        this.setState({ loadingError: true });
      });
  }

  handleDelete = (event) => {
    const id = event.target.value
    try { 
      deleteShow(id)
      .then(() => { 
        const index = this.state.shows.findIndex(show =>  id === show.id)
        const updatedShows = [...this.state.shows]
        updatedShows.splice(index, 1)
        this.setState({
          shows:updatedShows
        })
        this.props.history.push("/shows")  
    })}
    catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
    <Switch>
      <Route path="/shows/:id">
          <Show shows= { this.state.shows } handleDelete= { this.handleDelete }/>
      </Route>
    <section className="shows-index-wrapper">
  <h2>All Shows</h2>
  <section className="shows-index">
    {this.state.shows.map((show) => { 
      return <ShowListing  show={ show } key={ show.id }/>
    })}
  </section>
</section>
  </Switch>
    )
  }
}

export default withRouter(ShowsIndex);

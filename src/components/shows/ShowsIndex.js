import React from "react";
import ShowListing from "./ShowListing";
import "./ShowsIndex.css";
import Show from "./Show";
// import Error from "../common/Error.js";
// Helper functions
import { deleteShow, getAllShows } from "../../api/fetch";
import { Switch, Route, withRouter } from "react-router-dom";
//import {Routes, Route} ----> v6

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
        console.error(error);
        this.setState({ loadingError: true });
      });
  }
  // we need a handle delete method here to pass to our children
  handleDelete = (event) => {
    const id = event.target.value;
    try {
      deleteShow(id).then(() => {
        // alert("hooray it worked")
        // do state here - need to capture the data from before
        const index = this.state.shows.filter.findIndex(
          (show) => show.id === id
        );
        // console.log(index, "<-------- index dude")
        const updatedShows = [...this.state.shows];
        updatedShows.splice(index, 1);
        this.setState({
          shows: updatedShows,
          //how we do things in class components file
        });
        this.props.history.push("/shows");
        // navigate('/shows') ---> v6 way
      });
      // alert("we are deleting" + id)
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <Switch>
        <Route path="/shows/:id">
          <Show shows={this.state.shows} handleDelete={this.handleDelete} />
        </Route>
        <section className="shows-index-wrapper">
          <h2>All Shows</h2>
          <section className="shows-index">
            {this.state.shows.map((show) => {
              return <ShowListing show={show} key={show.id} />;
            })}
          </section>
        </section>
      </Switch>
    );
  }
}

export default withRouter(ShowsIndex);

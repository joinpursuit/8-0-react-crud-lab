import React from "react";

// Helper functions
import { getAllShows } from "../../api/fetch";
import Error from "../common/Error";
import ShowListing from "./ShowListing";
import Show from "./Show";
// import {Routes, Route} <-- new version (v6)
import {Switch, Route} from "react-router-dom";

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

  render() {
    return (
      <Switch>
        <Route path="/shows/:id">
          <Show shows={this.state.shows}/>
        </Route>
      <section className="shows-index-wrapper">
        <h2>All Shows</h2>
        <section className="shows-index">
          {this.state.loadingError ? <Error/> : this.state.shows.map(show => {
            return <ShowListing show={show} key={show.id}/>
        })}
        </section>
      </section>
      </Switch>
    );
  }
}

export default ShowsIndex;

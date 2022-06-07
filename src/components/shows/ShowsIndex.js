import React from "react";
import ShowListing from "./ShowListing";
import Show from "./Show";
import './ShowsIndex.css';
// import Error from "../common/Error";

// Helper functions
import { getAllShows } from "../../api/fetch";
import { Switch, Route } from "react-router-dom";

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
        {/* The below route is for when we click on a specific show link! */}
        <Route path="/shows/:id"> 
          <Show shows={this.state.shows} />
        </Route>
      <section className="shows-index-wrapper">
        <h2>All Shows</h2>
        {/* <!-- ShowListing components --> */}
        <section className="shows-index">
          {this.state.shows.map((show) => {
            // console.log(show)
            return <ShowListing show={ show } key={ show.id }/>
          })}
        </section>
      </section>
      </Switch>
    )
  }
}

export default ShowsIndex;

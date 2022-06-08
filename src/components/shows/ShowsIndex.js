import React from "react";
import Error from "../common/Error";

// Helper functions
import { deleteShow, getAllShows } from "../../api/fetch";
import ShowListing from "./ShowListing";
import Show from "./Show";
import "./ShowsIndex.css";
// import { Routes, Route } <---- NEW v6 react
import { Switch, Route, withRouter } from "react-router-dom";

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

  handleDelete = (event) => {
    const id = event.target.value;
    try {
      deleteShow(id).then(() => {
        const index = this.state.shows.findIndex((show) => show.id === id);
        const updatedShows = [...this.state.shows];
        updatedShows.splice(index, 1);
        this.setState({
          shows: updatedShows,
        });
        this.props.history.push("/shows");
        // navigate("/shows") version 6 way
      });
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

import React from "react";
import Error from "../common/Error";
// Helper functions
import { getAllShows } from "../../api/fetch";
import ShowListing from "./ShowListing";
import Show from "./Show";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";


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
      <div>

      <Switch>
          <Route path="/shows/:id">
            <Show shows={this.state.shows} />
          </Route>
        
        <Route>
        <section className="shows-index-wrapper">
          <h2>All Shows</h2>
          <section className="shows-index">
            {this.state.shows.map((show) => {
              return <ShowListing
                show={show}
                id={show.id}
                title={show.title}
                description={show.description}
                duration={show.duration}
                listedIn={show.listedIn}
                rating={show.rating}
                key={show.id} />
            })}
          </section>
        </section>
        </Route>
      </Switch>
      </div>
    )
  }
}

export default ShowsIndex;

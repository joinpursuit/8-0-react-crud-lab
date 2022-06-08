import React from "react";

// Helper functions
import { getAllShows } from "../../api/fetch";
import Error from "../common/Error";
import ShowListing from "./ShowListing";
import Show from "./Show";
import { deleteShow } from "../../api/fetch";
// import {Routes, Route} <-- new version (v6)
// Switch is old (v5)
// withRouter is old <-- use with class components
import {Switch, Route, withRouter} from "react-router-dom";

class ShowsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      loadingError: false,
    };
  }

  //when the component is created and added to the dom tree this fires once
  componentDidMount() {
    getAllShows()
      .then((shows) => this.setState({ shows, loadingError: false }))
      .catch((error) => {
        console.error(error);
        this.setState({ loadingError: true });
      });
  }

  //it's important to use the try catch so that when the attempt is made, if an error does occur, it will not crash the app
  handleDelete = (event) => {
    const id = event.target.value;
    try{
      //this returns a promise so you need to add .then for the response; this is where you setState
      deleteShow(id)
      .then(() => {
        const index = this.state.shows.findIndex(show => show.id === id);
        const updatedShows = [...this.state.shows];
        updatedShows.splice(index, 1)
        this.setState({
          shows: updatedShows
        })
        this.props.history.push("/shows")
      })
    }catch(err){
      console.log(err)
    }
  }

  render() {
    return (
      <Switch>
        <Route path="/shows/:id">
          <Show shows={this.state.shows} handleDelete={this.handleDelete}/>
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

export default withRouter(ShowsIndex);

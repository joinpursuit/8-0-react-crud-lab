import React from "react";
import ShowListing from "./ShowListing";
import { Switch, Route, withRouter } from "react-router-dom";
import Show from "./Show"
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
  handleDelete=(event) => {
    const id = event.target.value
    try{
      deleteShow(id)
        .then(()=>{
          const updatedShows = [...this.state.shows]
          const index = this.state.shows.findIndex((show) => show.id === id)
          updatedShows.splice(index,1)
          this.setState({
            shows: updatedShows
          })
          this.props.history.push("/shows")
        })
    }catch(err){
      console.log(err)
    }
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
        <Route path ="/shows/:id">
          <Show shows={this.state.shows} handleDelete={this.handleDelete}/>
        </Route>
        <section className="shows-index-wrapper">
          <h2>All Shows</h2>
          <section className="shows-index"></section>
          {this.state.shows.map((show) => {
            return <ShowListing show={show} key={show.id} />;
          })}
        </section>
      </Switch>
    );
  }
}

export default withRouter(ShowsIndex);

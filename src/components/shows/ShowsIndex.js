import React from 'react';
import Error from '../common/Error';


import { deleteShow, getAllShows } from '../../api/fetch';
import ShowListings from './ShowListings';
import { Switch, Route, withRouter } from "react-router-dom"
import "./ShowsIndex.css"
import Show from './Show'


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
    const id = event.target.value
    try {
      deleteShow(id)
        .then(() => {
          const index = this.state.shows.findIndex(show => show.id === id)
          const updatedShows = [...this.state.shows]
          updatedShows.splice(index, 1)
          this.setState({shows:updatedShows})
        
        })
      
      this.props.history.push('/shows')
      
      
    } catch (err) {
      console.log(err)
      this.setState({loadingError: true})
    }
  }

  render() {
    if (this.state.loadingError) {
      return <Error />
    }
    return (
      <Switch>
        <Route path="/shows/:id">
          <Show shows={this.state.shows} handleDelete={this.handleDelete} />
        </Route>
        <section className="shows-index-wrapper">
          <h2>All Shows</h2>
          <section className="shows-index">
            {this.state.shows.map((show) => {
              return <ShowListings show={show} key={show.id} />;
            })}
          </section>
        </section>
        
      </Switch>
    );
  }
}
           
export default withRouter(ShowsIndex);
import React from 'react';
import ErrorMessage from '../errors/ErrorMessage';
import { Link } from 'react-router-dom';
import MediaListing from './MediaListing';
import "../shows/ShowsIndex.css";

function IndexPage({errorVar, endpoint, searchVar, handleSearchFunction, dataVar}) {
    const convertEndpoint = `${endpoint.slice(0,1).toUpperCase()}${endpoint.slice(1).toLowerCase()}`
    const singleEndpoint = convertEndpoint.slice(0, convertEndpoint.length-1)
   
        
    return (
        <div>
        {errorVar ? (
          <ErrorMessage />
        ) : (
          <section className="shows-index-wrapper">
            <h2>All {convertEndpoint}</h2>
            <button>
              <Link to = {`/${endpoint}/new`}>Add a new {singleEndpoint}</Link>
            </button>
            <br />
            {/* Search bar input, to be updated with value searchInput */}
            <label htmlFor="searchTitle">
              Search {convertEndpoint}:
              <input
                type="text"
                value={searchVar}
                id="searchTitle"
                onChange={(event) => {handleSearchFunction(event)}}
              />
            </label>
            
            <section className="shows-index">
              {/* <!-- ShowListing components -> import showListing component to map over info from fetch and return showListing Component for each show--> */}
  
              {
                dataVar.map(({title, description, listedIn, duration, id}) => {
                  return <MediaListing
                  title ={title} 
                  description = {description} 
                  listedIn = {listedIn}
                  duration = {duration}
                  id = {id} 
                  endpoint = {endpoint}
                  key = {id} />
                })
              }
            
            </section>
          </section>
        )}
      </div>
    );
}

export default IndexPage;
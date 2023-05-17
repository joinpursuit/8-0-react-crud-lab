import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllMedia } from '../../api/fetch';
import { filterSearch, convertEndpoint } from '../../helperFunctions';
import MediaListing from './MediaListing';
import ErrorMessage from '../errors/ErrorMessage';
import "../css/ShowsIndex.css";


function IndexPage({endpoint}) {
    // Declare dynamic state to hold fetch data
    const [data, setData] = useState([])
    // Second set of data storage for search bar 
    const [altData, setAltData] = useState([])
    // State for error boolean 
    const [error, setError] = useState(false)
    // State for search bar input
    const [search, setSearch] = useState("")

    // function to handle Search input
    function handleSearch(e) {
        const input = e.target.value
        input ? setData(filterSearch(input, altData)) : setData(altData)
        setSearch(input)
    }
   
    // useEffect to fetch data on page load
    useEffect(() => {
        getAllMedia(endpoint)
        .then( respJson => {
            setData(respJson)
            setAltData(respJson)
            setError(false)
        })
        .catch(err => setError(true))
    }, [endpoint])
    

    return (
        <div>
            
        {error ? (
          <ErrorMessage />
        ) : (
          <section className="shows-index-wrapper">
            <h2>All {convertEndpoint(endpoint, true, false, false)}</h2>
            <button>
              <Link to = {`/${endpoint}/new`}>Add a new {convertEndpoint(endpoint, false, true, false)}</Link>
            </button>
            <br />
            {/* Search bar input, to be updated with value searchInput */}
            <label htmlFor="searchTitle">
              Search {convertEndpoint(endpoint, true, false, false)}: 
              <input
                type="text"
                value={search}
                id="searchTitle"
                onChange={(event) => {handleSearch(event)}}
              />
            </label>
            
            <section className="shows-index">
              {/* <!-- ShowListing components -> import showListing component to map over info from fetch and return showListing Component for each show--> */}
  
              {
                data.map(({title, description, listedIn, duration, id}) => {
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
import { Link } from "react-router-dom";

import ErrorMessage from "../errors/ErrorMessage";

import "./ShowsIndex.css";

import { entry_api } from '../../api/fetch';
import { useEffect, useState } from 'react';
import ShowListing from "./ShowListing";

let actual_display_list = []; 
const capitalize = (text)=>{
  return text[0].toUpperCase()+text.slice(1);
}


export default function ShowsIndex({entry}) {
  const [showsList,updateShowsList] = useState([]);
  const [error,updateError] =useState(false);
  const [searchTitle,setSearchTitle] = useState("");
  const ea = entry_api[entry];
  //////////////////////////////////////
  function handleTextChange(evt){
    //
    setSearchTitle(evt.target.value);
    updateShowsList(actual_display_list.filter(el=> el.title.toLowerCase().match(evt.target.value.toLowerCase())));

  }
  //////////////////////////////////////
  useEffect(()=>{
    ea.getAll()
    .then((data)=>{
      updateShowsList(data);
      actual_display_list = data;
      updateError(false);
    })
    .catch(error => {
      updateError(true);
      console.log(error);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[entry]);
  //////////////////////////////////////
  return (
    <div>
      {error ? (
        <ErrorMessage error={error}/>
      ) : (
        <section className="shows-index-wrapper">
          <h2>All {capitalize(entry)}s</h2>
          <button>
            <Link to={`/${entry}s/new`}>Add a new {capitalize(entry)}</Link>
          </button>
          <br />
          <label htmlFor="searchTitle">
            Search {capitalize(entry)}s:
            <input
              type="text"
              value={searchTitle}
              id="searchTitle"
              onChange={handleTextChange}
            />
          </label>
          <section className="shows-index">
            {/* <!-- ShowListing components --> */}
            { showsList?.map( el=> <ShowListing key={el.id} show={el} entry={entry}/> ) }
          </section>
        </section>
      )}
    </div>
  );
}

import React from 'react';
import ErrorMessage from '../errors/ErrorMessage';
import { Link } from 'react-router-dom';

function DisplayIndividualInfo({dataVar, errorVar, paramVar, deleteFunction, endpoint}) {
    return (
        <section className="shows-show-wrapper">
        <h2>{dataVar.title}</h2>
        <section className="shows-show">
          {errorVar ? (
            <ErrorMessage />
          ) : (
            <>
              <aside>
                <p>
                  <span>Duration:</span> {dataVar.duration}
                </p>
                <p>
                  <span>Listed Categories:</span> {dataVar.listedIn}
                </p>
                <p>
                  <span>Country:</span> {dataVar.country}
                </p>
                <p>
                  <span>Rating:</span> {dataVar.rating}
                </p>
                <p>
                  <span>Date Added:</span> {dataVar.dateAdded}
                </p>
              </aside>
              <article>
                <p>{dataVar.description}</p>
              </article>
              <aside>
                <button className="delete" 
                // on click trigger DELETE fetch call
                onClick={() => deleteFunction(paramVar)}>
                  Remove show
                </button>
                <Link to={`/${endpoint}/${paramVar}/edit`}>
                  <button>Edit</button>
                </Link>
              </aside>
            </>
          )}
        </section>
      </section>
    );
}

export default DisplayIndividualInfo;
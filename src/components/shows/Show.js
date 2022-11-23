import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./Show.css";

import ErrorMessage from "../errors/ErrorMessage";
import { entry_api } from "../../api/fetch";
function Show({entry}) {
  const ea = entry_api[entry];
  const [ show, setShow ] = useState({});
  const [ loadingError, setLoadingError ] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  /////////////////////////////////////
  useEffect(()=>{
    
    ea.getOne(id)
      .then((data)=>{
        setShow(data);
        setLoadingError(false);
      })
      .catch(error=>{setLoadingError(true)});
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  /////////////////////////////////////

  function handleDelete(id) {
    ea.destroy(id)
      .then((response)=>{
        navigate(`/${entry}s`);
      })
      .catch(error=>{setLoadingError(false);});
  }
  /////////////////////////////////////

  return (
    <section className="shows-show-wrapper">
      <h2>{show.title}</h2>
      <section className="shows-show">
        {loadingError ? (
          <ErrorMessage />
        ) : (
          <>
            <aside>
              <p>
                <span>Duration:</span> {show.duration}
              </p>
              <p>
                <span>Listed Categories:</span> {show.listedIn}
              </p>
              <p>
                <span>Country:</span> {show.country}
              </p>
              <p>
                <span>Rating:</span> {show.rating}
              </p>
              <p>
                <span>Date Added:</span> {show.dateAdded}
              </p>
            </aside>
            <article>
              <p>{show.description}</p>
            </article>
            <aside>
              <button className="delete" onClick={() => handleDelete(show.id)}>
                Remove {entry}
              </button>
              <Link to={`/${entry}s/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </aside>
          </>
        )}
      </section>
    </section>
  );
}

export default Show;

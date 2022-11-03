import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import "./Show.css";

import ErrorMessage from "../errors/ErrorMessage";
import { useEffect } from "react";
import { getOneShow, destroyShow} from "../../api/fetch";

function Show({loadingError, setLoadingError, id, navigate}) {
  const [show, setShow] = useState({});
  

  function handleDelete() {
    destroyShow(id)
    .then(() => navigate('/shows'))
    //After it is destroyed it needs to bring it back to shows. 
    .catch((error) =>{
      console.error(error);
      setLoadingError(true)
    })
  }

  useEffect(() => {
    getOneShow(id)
    .then(res =>{
      setShow(res)
      if(Object.keys(res).length === 0) setLoadingError(true)
      else setLoadingError(false)

    })
    .catch((error)=>{
      setLoadingError(true)
    })
  }, [id])

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
                Remove show
              </button>
              <Link to={`/shows/${id}/edit`}>
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

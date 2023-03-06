import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllMovies } from "../../api/fetch";

import ErrorMessage from "../errors/ErrorMessage";
import MovieListing from "./MovieListing";

import "./ShowsIndex.css"

function filterMovies (search, movies) {
  return movies.filter((movie) => {
    return movie.title.toLowerCase().match(search.toLowerCase());
  });
}

export default function MoviesIndex() {
  return <p>Movie List</p>;
}

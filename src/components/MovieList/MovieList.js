import React from 'react';
import "./MovieList.scss";
import Movie from '../Movie/Movie';
import {useSelector} from 'react-redux';
import uuid from 'uuid/v4';

function MovieList() {
  const response = useSelector(state => state.searchReducer)
  const movies = response.data[0];
  console.log(response);
  return (
    <section className="MovieList">
      {movies && movies.map((movie => {
        let id = uuid();
        return <Movie title={movie.Title} year={movie.Year} poster={movie.Poster} key={id} id={id}/>
      }))}
      {response.data[0] === undefined && response.data.length === 1 && <div className="MovieList__error">An error occured :( <p>No results or too many of dem</p></div>}
    </section>
  );
}

export default MovieList;

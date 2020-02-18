import React from 'react';
import "./Movie.scss";

function Movie(props) {
  return (
    <div className="Movie">
        <img src={props.poster} alt={props.title} className="Movie__poster"/>
        <h3 className="Movie__header">{props.title}</h3>
        <p className="Movie__year">{props.year}</p>
    </div>
  );
}

export default Movie;

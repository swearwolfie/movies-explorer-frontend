import React from "react";
import "./MoviesCard.css";

function MoviesCard({ movie, isSaved }) {
  return (
    <li className="movies__list-item" key={movie.id}>
      <img className="movie__poster" src={movie.image} alt={movie.title} />
      <div className="movie__container">
        <h3 className="movie__title">{movie.title} </h3>
        <div className={`movie__reaction ${isSaved ? "movie__reaction_delete" : "movie__reaction_like"}`}></div>
      </div>
      <p className="movie__duration">{movie.duration}</p>
    </li>
  );
}

export default MoviesCard;

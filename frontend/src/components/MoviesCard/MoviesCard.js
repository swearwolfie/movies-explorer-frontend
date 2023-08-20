import React from "react";
import "./MoviesCard.css";

function MoviesCard({ movie, isSaved }) {
  // const movieLink = "https://api.nomoreparties.co";
  // const moviePic = `${movieLink}${movie.image.url}`;

  function MntsToHours(minutes) {
    const hours = Math.floor(minutes / 60); // Get the whole number of hours
    const remainingMinutes = minutes % 60; // Get the remaining minutes
  
    if (hours === 0) {
      return `${remainingMinutes}м`;
    } 
    return `${hours}ч${remainingMinutes}м`;
  }

  return (
    <li className="movies__list-item">
      <img className="movie__poster" src={`https://api.nomoreparties.co${movie.image.url}`} alt={movie.title} />
      <div className="movie__container">
        <h3 className="movie__title">{movie.nameRU} </h3>
        <div className={`movie__reaction ${isSaved ? "movie__reaction_delete" : "movie__reaction_like"}`}></div>
      </div>
      <p className="movie__duration">{MntsToHours(movie.duration)}</p>
    </li>
  );
}

export default MoviesCard;

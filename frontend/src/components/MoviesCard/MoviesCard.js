import React, { useState } from "react";
import "./MoviesCard.css";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MoviesCard({
  movie,
  onMovieLike,
  onMovieDelete,
  savedMovies,
  savedSetting,
}) {
  // const currentUser = React.useContext(CurrentUserContext);
  // const isOwn = card.owner === currentUser._id;

  const isLiked =
    savedMovies.length === 0
      ? false
      : savedMovies.some((item) => item.movieId === movie.id);

  const isSaved =
    savedMovies.length === 0
      ? ""
      : savedMovies.find((item) => item.movieId === movie.id);

  // const Cons = savedMovies.length === 0
  // ? ''
  // : savedMovies.some((item) => {return console.log('mememe', item)})

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
      <a
        href={movie.trailerLink}
        className="movies__link"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="movie__poster"
          src={
            savedSetting
              ? movie.image
              : `https://api.nomoreparties.co${movie.image.url}`
          }
          alt={movie.title}
        />
      </a>
      <div className="movie__container">
        <h3 className="movie__title">{movie.nameRU} </h3>
        {savedSetting ? (
          <button
            type="button"
            onClick={() => onMovieDelete(movie._id)}
            className="movie__reaction movie__reaction_delete"
          ></button>
        ) : (
          <button
            type="button"
            onClick={() => onMovieLike(movie, isLiked, isSaved?._id)}
            className={`movie__reaction ${
              isLiked
                ? "movie__reaction_like movie__reaction_like_active"
                : "movie__reaction_like"
            }`}
          ></button>
        )}
      </div>
      <p className="movie__duration">{MntsToHours(movie.duration)}</p>
    </li>
  );
}

export default MoviesCard;

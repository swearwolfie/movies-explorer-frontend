import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, onMovieLike, onMovieDelete, savedMovies, savedSetting }) {
  return (
    <section className="movies__cards-section">
      <ul className="movies__list">
        {movies.map((movieCard) => (
          <MoviesCard key={movieCard.id || movieCard.movieId} movie={movieCard} onMovieLike={onMovieLike} onMovieDelete={onMovieDelete} savedMovies={savedMovies} savedSetting={savedSetting} />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;

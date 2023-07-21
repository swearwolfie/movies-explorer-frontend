import React from 'react';
import './MoviesCard.css';

function MoviesCard({ movie }) {
  return (
    <li className='movies-list-item' key={movie.id}>
    <img
    className="movie-poster"
    src={movie.image}
    alt={movie.title}
  />
        <div className='movie-container'>
        <h3 className='movie-title'>{movie.title} </h3>
        <div className='movie-like'></div>
        </div>
        <p className='movie-duration'>{movie.duration}</p>
    </li>
  )
}

export default MoviesCard;
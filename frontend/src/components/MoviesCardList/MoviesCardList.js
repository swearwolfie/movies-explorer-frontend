import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ onMore, movies }) {
  return (
    <section className='movies-cards-section'>
    <ul className='movies-list'>
    {movies.map((movie) => (
      <MoviesCard movie={movie} />
      ))} 
    </ul> 
     <button className="movies-button" onClick={onMore}>Еще</button> 
     </section>
  );
}

export default MoviesCardList;
import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies }) {
  return (
    <section className='movies__cards-section'>
    <ul className='movies__list'>
    {movies.map((movie) => (
      <MoviesCard movie={movie} />
      ))} 
    </ul> 
     </section>
  );
}

export default MoviesCardList;
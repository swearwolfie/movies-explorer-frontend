import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviePic from '../../images/pic__COLOR_pic.svg';
import MoviePic2 from '../../images//pic__COLOR_pic2.svg';
// import Preloader from '../Preloader/Preloader';

const movies = [
  {
    id: 1,
    title: '33 слова о дизайне',
    image: MoviePic,
    duration: '1ч42м'
  },
  {
    id: 2,
    title: '33 слова о дизайне',
    image: MoviePic,
    duration: '1ч42м'
  },
  {
    id: 3,
    title: '33 слова о дизайне',
    image: MoviePic2,
    duration: '1ч42м'
  }
]

function SavedMovies({ onMore }) {
  return (
    <>
    <SearchForm />
    {/* <Preloader /> */}
    <MoviesCardList movies={movies} />
    <div className="movies-button-container">
    <button className="movies-button movies-button_hidden" onClick={onMore}>Еще</button> 
    </div>
    </>
  )
}

export default SavedMovies;
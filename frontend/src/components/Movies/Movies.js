import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviePic from '../../images/pic__COLOR_pic.svg';
import MoviePic2 from '../../images//pic__COLOR_pic2.svg';
import Hamburger from '../Hamburger/Hamburger';
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
    image: MoviePic,
    duration: '1ч42м'
  },
  {
    id: 4,
    title: '33 слова о дизайне',
    image: MoviePic,
    duration: '1ч42м'
  },
  {
    id: 5,
    title: '33 слова о дизайне',
    image: MoviePic2,
    duration: '1ч42м'
  },
  {
    id: 6,
    title: '33 слова о дизайне',
    image: MoviePic,
    duration: '1ч42м'
  },
  {
    id: 7,
    title: '33 слова о дизайне',
    image: MoviePic,
    duration: '1ч42м'
  },
  {
    id: 8,
    title: '33 слова о дизайне',
    image: MoviePic,
    duration: '1ч42м'
  },
  {
    id: 9,
    title: '33 слова о дизайне',
    image: MoviePic,
    duration: '1ч42м'
  }
]

function Movies({ onMore }) {
  return (
    <>
    <Hamburger />
    <SearchForm />
    {/* <Preloader /> */}
    <MoviesCardList movies={movies} />
    <div className="movies-button__container">
    <button className="movies__button" onClick={onMore}>Еще</button> 
    </div>
    </>
  )
}

export default Movies;
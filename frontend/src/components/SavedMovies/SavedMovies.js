import React from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Hamburger from "../Hamburger/Hamburger";
import MoviePic from "../../images/pic__COLOR_pic.svg";
import MoviePic2 from "../../images//pic__COLOR_pic2.svg";
import Navigation from "../Navigation/Navigation";
// import Preloader from '../Preloader/Preloader';

const movies = [
  {
    id: 1,
    title: "33 слова о дизайне",
    image: MoviePic,
    duration: "1ч42м",
  },
  {
    id: 2,
    title: "33 слова о дизайне",
    image: MoviePic,
    duration: "1ч42м",
  },
  {
    id: 3,
    title: "33 слова о дизайне",
    image: MoviePic2,
    duration: "1ч42м",
  },
];

function SavedMovies({
  onMore,
  BurgerOpen,
  CloseBurgerMenu,
  SavedMoviesActive,
  onBurger
}) {
  return (
    <main className="saved-movies">
      <Navigation onNavBurger={onBurger} />
      <SearchForm />
      {BurgerOpen ? (
        <Hamburger
          onClose={CloseBurgerMenu}
          MenuVersion={BurgerOpen}
          SavedMoviesActive={SavedMoviesActive}
        />
      ) : (
        ""
      )}
      {/* <Preloader /> */}
      <MoviesCardList movies={movies} isSaved={true} />
      <div className="movies-button__container">
        <button
          className="movies__button movies__button_hidden"
          onClick={onMore}
        >
          Еще
        </button>
      </div>
    </main>
  );
}

export default SavedMovies;

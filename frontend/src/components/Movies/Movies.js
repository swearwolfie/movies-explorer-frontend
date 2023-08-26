import React, { useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Hamburger from "../Hamburger/Hamburger";
import Preloader from '../Preloader/Preloader';
import Navigation from "../Navigation/Navigation";

function Movies({ moviesList, onMore, BurgerOpen, CloseBurgerMenu, MoviesActive, onBurger }) {
  const [ searchInfo, setSearchInfo ] = useState('');
  const [ checkboxChecked, setCheckboxChecked ] = useState('');

  function handleOnSearchMovie(){
  }; 

  function handleCheckboxChange() {}

  return (
    <main className="movies">
       <Navigation onNavBurger={onBurger} />
      {}
      <SearchForm 
      onSearchMovie={handleOnSearchMovie}  
      searchInfo={searchInfo}
      setSearchInfo={setSearchInfo}
      checkboxChecked={checkboxChecked}
      checkboxOnChange={handleCheckboxChange}
      />
      {BurgerOpen ? (
        <Hamburger
          onClose={CloseBurgerMenu}
          MenuVersion={BurgerOpen}
          MoviesActive={MoviesActive}
        />
      ) : (
        ""
      )}
      { searchInfo ? <>
        <MoviesCardList movies={moviesList} isSaved={false} />
      <div className="movies-button__container">
        <button className="movies__button" onClick={onMore}>
          Еще
        </button>
      </div>
      </> : <Preloader /> }

    </main>
  );
}

export default Movies;
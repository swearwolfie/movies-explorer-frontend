import React, { useEffect, useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Hamburger from "../Hamburger/Hamburger";
import Preloader from '../Preloader/Preloader';
import Navigation from "../Navigation/Navigation";
import MoviesErrors from "../MoviesErrors/MoviesError";

function Movies({ moviesList, onMore, BurgerOpen, CloseBurgerMenu, MoviesActive, onBurger, moviesServerError }) {
  const [ searchInfo, setSearchInfo ] = useState('');
  const [ checkboxChecked, setCheckboxChecked ] = useState(false);
  const [ searchActive, setSearchActive ] = useState(false);
  const [ foundMovies, setFoundMovies ] = useState([]);
  const [ moviesNotFound, setMoviesNotFound ] = useState(false);
  // const [ localStorageFull, setLocalStorageFull ] = useState(false);
  const lastSearch = localStorage.getItem('lastSearch');
  const latestFoundMovies = localStorage.getItem('latestFoundMovies');
  const lastCheckStat = localStorage.getItem('lastCheckStat');

  function handleOnSearchMovie(searchValue, checkboxStat) {
    localStorage.setItem("lastSearch", searchValue);
    localStorage.setItem("lastCheckStat", checkboxStat);

    setSearchActive(true);

    let foundMoviesArray = [];
    if (checkboxStat) {
      foundMoviesArray = moviesList.filter((movie) => {
        return (
          (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
          movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())) &&
          movie.duration <= 40
        );
      })
      setFoundMovies(foundMoviesArray);
      localStorage.setItem('latestFoundMovies', JSON.stringify(foundMoviesArray));
    } else {  
    foundMoviesArray = moviesList.filter((movie) => {
      return (
        movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())
      );
    })
    setFoundMovies(foundMoviesArray);
    localStorage.setItem('latestFoundMovies', JSON.stringify(foundMoviesArray));
  } 
  if (foundMoviesArray.length === 0) {
    setMoviesNotFound(true);
  } else {
    setMoviesNotFound(false);
  }
  }; 

  useEffect(() => {
    if (lastSearch) {
      setSearchInfo(lastSearch)
    }
    if (latestFoundMovies) {
      setSearchActive(true);
      setFoundMovies(JSON.parse(latestFoundMovies))
    }
    if (lastCheckStat) {
      setCheckboxChecked(JSON.parse(lastCheckStat))
    }
  }, [lastSearch, latestFoundMovies, lastCheckStat])

  // // готовы фильмы для передачи в movies 
  // const renderFoundMovies = () => {
  //   return foundMovies.slice()
  // }

  function handleCheckboxChange() {
    // если инпут не пустой, чекбокс активен и фильтрует
    if (searchInfo !== '') {
      setCheckboxChecked(!checkboxChecked);
      handleOnSearchMovie(searchInfo, !checkboxChecked)
    } 
  }

  return (
    <main className="movies">
       <Navigation onNavBurger={onBurger} />
      {}
      <SearchForm 
      onSearchMovie={handleOnSearchMovie}  
      searchInfo={searchInfo}
      setSearchInfo={setSearchInfo}
      checkboxChecked={checkboxChecked}
      handleCheckboxOnChange={handleCheckboxChange}
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
       {moviesNotFound || moviesServerError ?  <MoviesErrors serverError={moviesServerError}/> :
       searchActive ?  <>
       <MoviesCardList movies={foundMovies} isSaved={false} />
     <div className="movies-button__container">
       <button className="movies__button" onClick={onMore}>
         Еще
       </button>
     </div>
      </> :
      <Preloader />}
    </main>
  );
}

export default Movies;
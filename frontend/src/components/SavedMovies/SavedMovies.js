import React, { useState } from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Hamburger from "../Hamburger/Hamburger";
import Navigation from "../Navigation/Navigation";
import MoviesErrors from "../MoviesErrors/MoviesError";

function SavedMovies({
  BurgerOpen,
  CloseBurgerMenu,
  SavedMoviesActive,
  onBurger,
  savedMovies,
  onMovieDelete,
  moviesServerError,
}) {
  const [searchInfo, setSearchInfo] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [foundMovies, setFoundMovies] = useState([]);
  const [moviesNotFound, setMoviesNotFound] = useState(false);

  // руководим чекбоксом
  function handleCheckboxChange() {
    // если инпут не пустой, чекбокс активен и фильтрует
    if (searchInfo !== "") {
      setCheckboxChecked(!checkboxChecked);
      handleOnSearchMovie(searchInfo, !checkboxChecked);
    } else {
      setCheckboxChecked(!checkboxChecked);
      const foundMoviesArray = savedMovies.filter((movie) => {
        return movie.duration <= 40;
      });
      setFoundMovies(foundMoviesArray);
    }
  }

  // основная функция по поиску фильмов
  function handleOnSearchMovie(searchValue, checkboxStat) {
    localStorage.setItem("lastSearchInSaved", searchValue);
    localStorage.setItem("lastCheckStatInSaved", checkboxStat);

    setSearchActive(true);
    setTimeout(() => {
      let foundMoviesArray = [];
      if (checkboxStat) {
        foundMoviesArray = savedMovies.filter((movie) => {
          return (
            (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
              movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())) &&
            movie.duration <= 40
          );
        });
        setFoundMovies(foundMoviesArray);
        localStorage.setItem(
          "latestFoundMoviesInSaved",
          JSON.stringify(foundMoviesArray)
        );
      } else {
        foundMoviesArray = savedMovies.filter((movie) => {
          return (
            movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())
          );
        });
        setFoundMovies(foundMoviesArray);
        localStorage.setItem(
          "latestFoundMoviesInSaved",
          JSON.stringify(foundMoviesArray)
        );
      }
      if (foundMoviesArray.length === 0) {
        setMoviesNotFound(true);
        localStorage.removeItem("lastSearchInSaved");
        localStorage.removeItem("latestFoundMoviesInSaved");
      } else {
        setMoviesNotFound(false);
      }
    }, 2000);
  }

  return (
    <main className="saved-movies">
      <Navigation onNavBurger={onBurger} />
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
          SavedMoviesActive={SavedMoviesActive}
        />
      ) : (
        ""
      )}
      {moviesNotFound || moviesServerError ? (
        <MoviesErrors serverError={moviesServerError} />
      ) : searchActive || checkboxChecked ? (
        <>
          <MoviesCardList
            movies={foundMovies}
            onMovieDelete={onMovieDelete}
            savedMovies={savedMovies}
            savedSetting={true}
          />
        </>
      ) : (
        <MoviesCardList
          movies={savedMovies}
          onMovieDelete={onMovieDelete}
          savedMovies={savedMovies}
          savedSetting={true}
        />
      )}
    </main>
  );
}

export default SavedMovies;

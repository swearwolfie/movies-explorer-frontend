import React, { useEffect, useState, useMemo, useCallback } from "react";
import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Hamburger from "../Hamburger/Hamburger";
import Navigation from "../Navigation/Navigation";
import MoviesErrors from "../MoviesErrors/MoviesError";
// import Preloader from '../Preloader/Preloader';

function SavedMovies({
  onMore,
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
  // const [moreMovies, setMoreMovies] = useState(0);
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const lastSearchInSaved = localStorage.getItem("lastSearchInSaved");
  const latestFoundMoviesInSaved = localStorage.getItem(
    "latestFoundMoviesInSaved"
  );
  const lastCheckStatInSaved = localStorage.getItem("lastCheckStatInSaved");
  // const TABLET_VIEW = 768;
  // const LAPTOP_VIEW = 950;
  // const MOBILE_VIEW = 500;

  // руководим чекбоксом
  function handleCheckboxChange() {
    // если инпут не пустой, чекбокс активен и фильтрует
    if (searchInfo !== "") {
      setCheckboxChecked(!checkboxChecked);
      handleOnSearchMovie(searchInfo, !checkboxChecked);
    }
  }

  // основная функция по поиску фильмов
  function handleOnSearchMovie(searchValue, checkboxStat) {
    localStorage.setItem("lastSearchInSaved", searchValue);
    localStorage.setItem("lastCheckStatInSaved", checkboxStat);

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

  // // финальный рендеринг карточек под размер экрана и иисусьи слезы
  // const renderMovies = useMemo(() => {
  //   const cardsSet =
  //     screenWidth < MOBILE_VIEW ? 5 : screenWidth < TABLET_VIEW ? 8 : screenWidth < LAPTOP_VIEW ? 12 : 16;
  //   return foundMovies.slice(0, cardsSet + moreMovies);
  // }, [screenWidth, moreMovies, foundMovies]);

  // // устанавливаем ширину
  // const handleResize = useCallback(() => {
  //   setScreenWidth(window.innerWidth);
  // }, []);

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // });

  // запоминаем финтифлюшки для перезагрузки страницы
  useEffect(() => {
    if (lastSearchInSaved) {
      setSearchInfo(lastSearchInSaved);
    }
    if (latestFoundMoviesInSaved) {
      setFoundMovies(JSON.parse(latestFoundMoviesInSaved));
    }
    if (lastCheckStatInSaved) {
      setCheckboxChecked(JSON.parse(lastCheckStatInSaved));
    }
  }, [lastSearchInSaved, latestFoundMoviesInSaved, lastCheckStatInSaved]);

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
      {/* {foundMovies.length !== 0
      ? <MoviesCardList movies={foundMovies} onMovieDelete={onMovieDelete} savedMovies={savedMovies} savedSetting={true} />
      : moviesNotFound}
      <div className="movies-button__container">
        <button
          className="movies__button movies__button_hidden"
          onClick={onMore}
        >
          Еще
        </button>
      </div> */}
      {moviesNotFound || moviesServerError ? (
        <MoviesErrors serverError={moviesServerError} />
      ) : searchActive ? (
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
      {/* <div className="movies-button__container">
        <button
          className="movies__button movies__button_hidden"
          onClick={onMore}
        >
          Еще
        </button>
      </div> */}
    </main>
  );
}

export default SavedMovies;

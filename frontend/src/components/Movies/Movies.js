import React, { useEffect, useState, useMemo, useCallback } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Hamburger from "../Hamburger/Hamburger";
import Preloader from "../Preloader/Preloader";
import Navigation from "../Navigation/Navigation";
import MoviesErrors from "../MoviesErrors/MoviesError";
import { TABLET_VIEW, LAPTOP_VIEW, MOBILE_VIEW } from "../../utils/constants";

function Movies({
  moviesList,
  BurgerOpen,
  CloseBurgerMenu,
  MoviesActive,
  onBurger,
  moviesServerError,
  onMovieLike, 
  savedMovies
}) {
  const [searchInfo, setSearchInfo] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [foundMovies, setFoundMovies] = useState([]);
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [moreMovies, setMoreMovies] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const lastSearch = localStorage.getItem("lastSearch");
  const latestFoundMovies = localStorage.getItem("latestFoundMovies");
  const lastCheckStat = localStorage.getItem("lastCheckStat");

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
    localStorage.setItem("lastSearch", searchValue);
    localStorage.setItem("lastCheckStat", checkboxStat);

    setSearchActive(true);

    setTimeout(() => {
      let foundMoviesArray = [];
      if (checkboxStat) {
        foundMoviesArray = moviesList.filter((movie) => {
          return (
            (movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
              movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())) &&
            movie.duration <= 40
          );
        });
        setFoundMovies(foundMoviesArray);
        localStorage.setItem(
          "latestFoundMovies",
          JSON.stringify(foundMoviesArray)
        );
      } else {
        foundMoviesArray = moviesList.filter((movie) => {
          return (
            movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(searchValue.toLowerCase())
          );
        });
        setFoundMovies(foundMoviesArray);
        localStorage.setItem(
          "latestFoundMovies",
          JSON.stringify(foundMoviesArray)
        );
      }
      if (foundMoviesArray.length === 0) {
        setMoviesNotFound(true);
        localStorage.removeItem("lastSearch");
        localStorage.removeItem("latestFoundMovies");
        setSearchActive(false);
      } else {
        setMoviesNotFound(false);
      }
    }, 2000);
  }

  // финальный рендеринг карточек под размер экрана и иисусьи слезы
  const renderMovies = useMemo(() => {
    const cardsSet =
      screenWidth < MOBILE_VIEW ? 5 : screenWidth < TABLET_VIEW ? 8 : screenWidth < LAPTOP_VIEW ? 12 : 16;
    return foundMovies.slice(0, cardsSet + moreMovies);
  }, [screenWidth, moreMovies, foundMovies]);

  // устанавливаем ширину
  const handleResize = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // кнопка 'еще'
  const handleOnMore = () => {
    if (screenWidth >= LAPTOP_VIEW) {
      setMoreMovies((previous) => previous + 4);
    } else if (screenWidth > TABLET_VIEW) {
      setMoreMovies((previous) => previous + 3);
    } else if (screenWidth < TABLET_VIEW) {
      setMoreMovies((previous) => previous + 2);
    }
  };

  // запоминаем финтифлюшки для перезагрузки страницы
  useEffect(() => {
    if (lastSearch) {
      setSearchInfo(lastSearch);
    }
    if (latestFoundMovies) {
      setSearchActive(true);
      setFoundMovies(JSON.parse(latestFoundMovies));
    }
    if (lastCheckStat) {
      setCheckboxChecked(JSON.parse(lastCheckStat));
    }
  }, [lastSearch, latestFoundMovies, lastCheckStat]);

  return (
    <main
      className={`movies ${
        !searchActive || moviesNotFound || moviesServerError
          ? "movies__height"
          : ""
      }`}
    >
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
      {moviesNotFound || moviesServerError ? (
        <MoviesErrors serverError={moviesServerError} />
      ) : searchActive ? (
        <>
          <MoviesCardList movies={renderMovies} onMovieLike={onMovieLike} savedMovies={savedMovies} savedSetting={false} />
          <div className="movies-button__container">
            <button className={`movies__button ${foundMovies.length === renderMovies.length  ? 'movies__button_hidden' : ''}`} onClick={handleOnMore}>
              Еще
            </button>
          </div>
        </>
      ) : (
        <Preloader />
      )}
    </main>
  );
}

export default Movies;

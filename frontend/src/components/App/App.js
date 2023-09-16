import React, { useState, useEffect } from "react";
import "../../index.css";
import "./App.css";
import getMoviesApi from "../../utils/MoviesApi";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import Navigation from "../Navigation/Navigation";
import NotFound from "../NotFound/NotFound";
import { createUser, authorize, checkToken } from "../../utils/Auth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute";
import { useLocation } from "react-router-dom";
import InfoTooltip from '../InfoTooltip/InfoTooltip'

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [uploadedMovies, setUploadedMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isInfoToolOpen, setIsInfoToolOpen] = useState(false);
  const [moviesServerError, setMoviesServerError] = useState(false);
  const [popupMessageStatus, setPopupMessageStatus] = useState({
    message: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([
        mainApi.getCurrentUser(),
        getMoviesApi.getAllMovies(),
        mainApi.getMovies()
      ])
      .then(([profileUserInfo, movies, savedMovies]) => {
        setCurrentUser(profileUserInfo.data);
        setUploadedMovies(movies);
        setSavedMovies(savedMovies.data);
        console.log("walk with giants", savedMovies.data);
      })
      .catch((error) => {
        console.log(error);
        setMoviesServerError(true);
      })
    }
  }, [isLoggedIn])

  function handleSignUp({ name, email, password }) { 
    createUser(name, email, password)
      .then(() => {
        console.log("успех регистрации", name, email, password);
        handleSignIn({ email, password });
      })
      .catch((error) => {
        if (error.includes(409)) {
          setPopupMessageStatus({
            text: "Такой пользователь уже существует",
          });
          setIsInfoToolOpen(true);
        } else {
          setPopupMessageStatus({
            text: "Что-то пошло не так. Попробуйте еще раз",
          });
          console.log(error);
          setIsInfoToolOpen(true);
        }
      });
  }

  function handleSignIn({ email, password }) {
    authorize(email, password)
      .then((data) => {
        if (data) {
          localStorage.setItem("jwt", data.jwt);
          setIsLoggedIn(true);
          console.log(data.jwt, email, isLoggedIn, "успех входа");
          navigate("/movies");
        }
      })
      .catch((error) => {
        setPopupMessageStatus({
          text: "Что-то пошло не так. Попробуйте еще раз",
        });
        console.log(error);
        setIsInfoToolOpen(true);
      });
  }

  function handleBurgerOpen() {
    setIsBurgerMenuOpen(true);
  }

  function handleCloseBurgerMenu() {
    setIsBurgerMenuOpen(false);
  }

  function closeAllPopups() {
    // setIsAddPlacePopupOpen(false);
    // setIsImagePopupOpen(false);
    setIsInfoToolOpen(false);
  }

  function handleUpdateUser({ name, email }) {
    mainApi
      .changeUser(name, email)
      .then((updateInfo) => {
        setCurrentUser(updateInfo.data);
        console.log(updateInfo, 'hey you')
      })
      .catch((error) => {
        setPopupMessageStatus({
          text: "Что-то пошло не так. Попробуйте еще раз",
        });
        console.log(error);
        setIsInfoToolOpen(true);
      });
  }
  
  // проверка токена
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    const thisPage = location.pathname;
    if (token) {
      checkToken(token)
        .then((data) => {
          if (data) {
            setIsLoggedIn(true);
            console.log('hey token check', isLoggedIn, data)
            setCurrentUser(data.data);
          }
          navigate(thisPage);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLoggedIn]);

  function handleSaveMovie(movie, isLiked, id) {
    if (!isLiked) {
      mainApi
      .createMovie(movie)
      .then((newSavedMovie) => {
        setSavedMovies([...savedMovies, newSavedMovie.data])
      })
      .catch((error) => {
        console.log(error);
      })
    } else {
      handleRemoveSavedMovie(id);
    }
  }

  function handleRemoveSavedMovie(id) {
    const latestFoundMoviesInSaved = JSON.parse(localStorage.getItem("latestFoundMoviesInSaved"));
    mainApi.deleteMovie(id)
    .then(() => {
      const reSavedMovies = savedMovies.filter((movie) => id !== movie._id);
      setSavedMovies(reSavedMovies);
      localStorage.setItem('savedMovies', JSON.stringify(reSavedMovies));

      if (latestFoundMoviesInSaved) {
        const updatedLatestFoundMoviesInSaved = latestFoundMoviesInSaved.filter((movie) => id !== movie._id);
        localStorage.setItem('latestFoundMoviesInSaved', JSON.stringify(updatedLatestFoundMoviesInSaved))
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  function handleSignOut() {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    // localStorage.clear();
    console.log('no maureen', isLoggedIn)
    navigate("/");
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {isLoggedIn ? (
                  <Navigation onNavBurger={handleBurgerOpen} />
                ) : (
                  <Header />
                )}
                <Main
                  BurgerOpen={isBurgerMenuOpen}
                  MainActive={isBurgerMenuOpen}
                  CloseBurgerMenu={handleCloseBurgerMenu}
                />
                <Footer />
              </>
            }
          />
          <Route
            path="/movies"
            element={<ProtectedRoute isLoggedIn={isLoggedIn} />}
          >
            <Route
              path="/movies"
              element={
                <>
                  <Movies
                    moviesList={uploadedMovies}
                    BurgerOpen={isBurgerMenuOpen}
                    CloseBurgerMenu={handleCloseBurgerMenu}
                    MoviesActive={isBurgerMenuOpen}
                    onBurger={handleBurgerOpen}
                    moviesServerError={moviesServerError}
                    onMovieLike={handleSaveMovie}
                    // onMovieDelete={handleRemoveSavedMovie}
                    savedMovies={savedMovies}
                  />
                  <Footer />
                </>
              }
            ></Route>
          </Route>

          <Route
            path="/saved-movies"
            element={<ProtectedRoute isLoggedIn={isLoggedIn} />}
          >
            <Route
              path="/saved-movies"
              element={
                <>
                  <SavedMovies
                    BurgerOpen={isBurgerMenuOpen}
                    CloseBurgerMenu={handleCloseBurgerMenu}
                    SavedMoviesActive={isBurgerMenuOpen}
                    onBurger={handleBurgerOpen}
                    onMovieDelete={handleRemoveSavedMovie}
                    savedMovies={savedMovies}
                    moviesServerError={moviesServerError}
                  />
                  <Footer />
                </>
              }
            ></Route>
          </Route>

          <Route
            path="/profile"
            element={<ProtectedRoute isLoggedIn={isLoggedIn} />}
          >
            <Route
              path="/profile"
              element={
                <>
                  <Profile
                    BurgerOpen={isBurgerMenuOpen}
                    CloseBurgerMenu={handleCloseBurgerMenu}
                    onUpdateUser={handleUpdateUser}
                    onExit={handleSignOut}
                    onBurger={handleBurgerOpen}
                  />
                </>
              }
            ></Route>
          </Route>

          <Route path="/signin" element={<Login onSignIn={handleSignIn} />} />
          <Route
            path="/signup"
            element={<Register onSignUp={handleSignUp} />}
          />

          <Route path="/*" element={<NotFound />} />
        </Routes>
        <InfoTooltip
          isOpen={isInfoToolOpen}
          onClose={closeAllPopups}
          message={popupMessageStatus}
        />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;

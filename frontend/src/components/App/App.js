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
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import { createUser, authorize, checkToken } from "../../utils/Auth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [uploadedMovies, setUploadedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate();

  // получаем все фильмы
  useEffect(() => {
    getMoviesApi
      .getAllMovies() // result - готовые данные
      .then((movies) => {
        setUploadedMovies(movies);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // получаем информацию юзера от сервера
  useEffect(() => {
    mainApi
      .getCurrentUser()
      .then((profileUserInfo) => {
        setCurrentUser(profileUserInfo);
        console.log('here i am waiting for a sign', profileUserInfo)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function handleSignUp({ name, email, password }) {
    createUser(name, email, password)
    .then(() => {
      console.log('успех регистрации', name, email, password)
      navigate("/movies");
    })
    .catch((error) => {
      console.log(error);
    })
  }

  function handleSignIn({ email, password }) {
    authorize(email, password)
      .then((data) => {
        if (data) {
          console.log(data, email, "успех апи");
          // setProfileEmail(email);
          localStorage.setItem("jwt", data.token);
          // setIsLoggedIn(true);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleBurgerOpen() {
    setIsBurgerMenuOpen(true);
  }

  function handleCloseBurgerMenu() {
    setIsBurgerMenuOpen(false);
  }

  function handleUpdateUser({ name, email }) {
    mainApi
      .changeUser(name, email)
      .then((updateInfo) => {
        setCurrentUser(updateInfo);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
      <Header onBurger={handleBurgerOpen} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <Footer />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Movies
                moviesList={uploadedMovies}
                BurgerOpen={isBurgerMenuOpen}
                CloseBurgerMenu={handleCloseBurgerMenu}
                MoviesActive={isBurgerMenuOpen}
              />
              <Footer />
            </>
          }
        />

        <Route
          path="/saved-movies"
          element={
            <>
              <SavedMovies
                BurgerOpen={isBurgerMenuOpen}
                CloseBurgerMenu={handleCloseBurgerMenu}
                SavedMoviesActive={isBurgerMenuOpen}
              />
              <Footer />
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <Profile
                BurgerOpen={isBurgerMenuOpen}
                CloseBurgerMenu={handleCloseBurgerMenu}
                onUpdateUser={handleUpdateUser}
              />
            </>
          }
        />
        <Route path="/signin" element={<Login onSignIn={handleSignIn} />} />
        <Route path="/signup" element={<Register onSignUp={handleSignUp} />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;

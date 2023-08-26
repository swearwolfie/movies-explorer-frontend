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

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [uploadedMovies, setUploadedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt)
        .then((data) => {
          if (data) {
            setIsLoggedIn(true);
            console.log('yes maureen', isLoggedIn, data)
            // setProfileEmail(data.data.email);
            // получаем юзера
            mainApi
              .getCurrentUser()
              .then((profileUserInfo) => {
                setCurrentUser(profileUserInfo.data);
                console.log("walk with giants");
              })
              .catch((error) => {
                console.log(error);
              });
          }
          // получаем все фильмы
          getMoviesApi
            .getAllMovies()
            .then((movies) => {
              setUploadedMovies(movies);
              console.log("movies success", movies);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [isLoggedIn, navigate]);

  function handleSignUp({ name, email, password }) {
    console.log('111', name, email, password)
    createUser(name, email, password)
      .then(() => {
        navigate("/");
        console.log("успех регистрации", name, email, password);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleSignIn({ email, password }) {
    authorize(email, password)
      .then((data) => {
        if (data) {
          // setProfileEmail(email);
          localStorage.setItem("jwt", data.jwt);
          setIsLoggedIn(true);
          navigate("/movies");
          console.log(data.jwt, email, "успех входа");
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
        setCurrentUser(updateInfo.data);
        console.log(updateInfo, 'hey you')
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // // проверка токена

  // useEffect(() => {
  //   const token = localStorage.getItem("jwt");
  //   if (token) {
  //     checkToken(token)
  //       .then((data) => {
  //         if (data) {
  //           setIsLoggedIn(true);
  //           console.log('yes maureen', isLoggedIn)
  //           // setProfileEmail(data.data.email);
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // }, [isLoggedIn]);

  function handleSignOut() {
    setIsLoggedIn(false);
    localStorage.removeItem("jwt");
    console.log('no maureen', isLoggedIn)
    navigate("/signin");
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {isLoggedIn ? <Navigation onNavBurger={handleBurgerOpen}/> : <Header />}
                <Main BurgerOpen={isBurgerMenuOpen} MainActive={isBurgerMenuOpen} CloseBurgerMenu={handleCloseBurgerMenu} />
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
                  onBurger={handleBurgerOpen}
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
                  onBurger={handleBurgerOpen}
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
                  onExit={handleSignOut}
                  onBurger={handleBurgerOpen}
                />
              </>
            }
          />
          <Route path="/signin" element={<Login onSignIn={handleSignIn} />} />
          <Route
            path="/signup"
            element={<Register onSignUp={handleSignUp} />}
          />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;

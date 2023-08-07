import React, { useState } from "react";
import "../../index.css";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";

function App() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  function handleBurgerOpen() {
    setIsBurgerMenuOpen(true);
  }

  function handleCloseBurgerMenu() {
    setIsBurgerMenuOpen(false);
  }

  return (
    <>
      {/* <CurrentUserContext.Provider>
      <Header />
      <Main />
      <Footer />
      </CurrentUserContext.Provider> */}
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
              />
            </>
          }
        />

        <Route path="/signin" element={<Login />} />

        <Route path="/signup" element={<Register />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

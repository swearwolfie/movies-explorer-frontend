import React from "react";
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

function App() {
  return (
    <>
      {/* <CurrentUserContext.Provider>
      <Header />
      <Main />
      <Footer />
      </CurrentUserContext.Provider> */}
      <Header />
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
              <Movies />
              <Footer />
            </>
          }
        />

        <Route
          path="/saved-movies"
          element={
            <>
              <SavedMovies />
              <Footer />
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <Profile />
            </>
          }
        />

         <Route
          path="/signin"
          element={
              <Login />
          }
        />

        <Route 
        path="/singup" 
        element={
        <Register />
        } 
        />
      </Routes>
    </>
  );
}

export default App;

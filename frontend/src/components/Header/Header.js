import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo/Logo";
import Account from "../Account/Account";

function Header({ onBurger }) {
  return (
    <header className="header">
      <Routes>
        <Route
          path="/"
          element={
            <>
            <Logo />
            <div className="header__container">
              <Link to="/signup" className="header__link">
                Регистрация
              </Link>
              <Link to="/signin" className="header__signin">
                Войти
              </Link>
            </div>
            </>
          }
        />

        {[ "/movies", "/saved-movies", "/profile" ].map((path, index) => 
                <Route
                path={path}
                key={index}
                element={
                  <>
                  <Logo />
                  <div className="header__container">
                    <Link to="/movies" className="header__link header__link_movies">
                      Фильмы
                    </Link>
                    <Link to="/saved-movies" className="header__link header__link_movies">
                      Сохраненные фильмы
                    </Link>
                  </div>
                  <Account />
                  <button className="header__burger-button" onClick={onBurger}></button> 
                  </>
                }
              />
        )}
      </Routes>
    </header>
  );
}

export default Header;

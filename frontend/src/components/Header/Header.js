import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./Header.css";

function Header({ onSignOut }) {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="header__container">
              <Link to="/signup" className="header__link">
                Регистрация
              </Link>
              <button className="header__button" onClick={onSignOut}>
                Войти
              </button>
            </div>
          }
        />

        {[ "/movies", "/saved-movies", "/profile" ].map((path, index) => 
                <Route
                path={path}
                key={index}
                element={
                  <>
                  <div className="header__container">
                    <Link to="/movies" className="header__link header__link_movies">
                      Фильмы
                    </Link>
                    <Link to="/saved-movies" className="header__link header__link_movies">
                      Сохраненные фильмы
                    </Link>
                  </div>
                  <div className="header__account">
                    <div className="header__account-icon"></div>
                  <Link to="/profile" className="header__account-link">
                      Аккаунт
                    </Link>
                  </div>
                  </>
                }
              />
        )}
      </Routes>
    </header>
  );
}

export default Header;

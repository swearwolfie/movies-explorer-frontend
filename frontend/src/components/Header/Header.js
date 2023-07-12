import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './Header.css';

function Header({ onSignOut }) {
  return (
    <header className="header">
    <div className="header__logo"></div>
    <Routes>
    <Route
          path="/"
          element={
            <div className='header__container'>
            <Link to="/signup" className="header__link">
              Регистрация
            </Link>
            <button className="header__button" onClick={onSignOut}>
                  Войти
                </button>
            </div>
          }
        />
    </Routes>
  </header>
  )
}

export default Header;
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

function Header({ onBurger, isLoggedIn }) {
  return (
    <header className="header">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Logo /> 
              {isLoggedIn ? 
               <Navigation onNavBurger={onBurger} /> :   
                <div className="header__container">
               <Link to="/signup" className="header__link">
                 Регистрация
               </Link>
               <Link to="/signin" className="header__signin">
                 Войти
               </Link>
             </div>}
            </>
          }
        />

        {["/movies", "/saved-movies", "/profile"].map((path, index) => (
          <Route
            path={path}
            key={index}
            element={
              <>
                <Logo />
                <Navigation onNavBurger={onBurger} />
              </>
            }
          />
        ))}
      </Routes>
    </header>
  );
}

export default Header;

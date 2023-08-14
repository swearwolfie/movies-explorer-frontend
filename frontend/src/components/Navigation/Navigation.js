import React from "react";
import "./Navigation.css";
import Account from "../Account/Account";
import { Link } from "react-router-dom";

function Navigation({ onNavBurger }) {
  return (
    <>
      <div className="navigation__container">
        <Link to="/movies" className="navigation__link">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="navigation__link">
          Сохраненные фильмы
        </Link>
      </div>
      <Account />
      <button className="navigation__burger-button" onClick={onNavBurger}></button>
    </>
  );
}

export default Navigation;
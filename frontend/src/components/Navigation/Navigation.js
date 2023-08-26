import React from "react";
import "./Navigation.css";
import Account from "../Account/Account";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Logo from "../Logo/Logo";

function Navigation({ onNavBurger }) {
  return (
    <section className="navigation">
      <Logo />
      <div className="navigation__container">
        <Link to="/movies" className="navigation__link">
          Фильмы
        </Link>
        <Link to="/saved-movies" className="navigation__link">
          Сохраненные фильмы
        </Link>
      </div>
      <Account />
      <button
        className="navigation__burger-button"
        onClick={onNavBurger}
      ></button>
    </section>
  );
}

export default Navigation;
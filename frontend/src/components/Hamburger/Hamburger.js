import React from "react";
import "./Hamburger.css";
import { Link } from "react-router-dom";
import Account from "../Account/Account";

function Hamburger({ onClose, MenuVersion, MoviesActive, SavedMoviesActive }) {
  return (
    <section className="hamburger">
      <div className="hamburger__container">
        <button
          onClick={onClose}
          className="hamburger__close-icon"
          type="button"
          aria-label="закрыть"
        ></button>
        <ul className="hamburger__list">
          <li className="hamburger__list-item">
            <Link to="/" className="hamburger__link">
              Главная
            </Link>
          </li>
          <li className="hamburger__list-item">
            <Link
              to="/movies"
              className={`hamburger__link ${
                MoviesActive ? "hamburger__link_active" : ""
              }`}
            >
              Фильмы
            </Link>
          </li>
          <li className="hamburger__list-item">
            <Link
              to="/saved-movies"
              className={`hamburger__link ${
                SavedMoviesActive ? "hamburger__link_active" : ""
              }`}
            >
              Сохраненные фильмы
            </Link>
          </li>
        </ul>
        <Account MenuVersion={MenuVersion} />
      </div>
    </section>
  );
}

export default Hamburger;

import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <header className="header">
        <Logo />
          <div className="header__container">
            <Link to="/signup" className="header__link">
              Регистрация
            </Link>
            <Link to="/signin" className="header__signin">
              Войти
            </Link>
          </div>
    </header>
  );
}

export default Header;

import React from "react";
import "./NavTab.css";

function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__section">
        <li className="navtab__list">
          <a href="#about-project" className="navtab__link">
            О проекте
          </a>
        </li>
        <li className="navtab__list">
          <a href="#techs" className="navtab__link">
            Технологии
          </a>
        </li>
        <li className="navtab__list">
          <a href="#about-me" className="navtab__link">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;

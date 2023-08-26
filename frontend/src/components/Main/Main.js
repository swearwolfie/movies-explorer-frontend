import React from "react";
import "./Main.css";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Hamburger from "../Hamburger/Hamburger";

function Main({ BurgerOpen, CloseBurgerMenu, MainActive }) {
  return (
    <main className="main">
      <Promo />
      <AboutProject />
      {BurgerOpen ? 
      <Hamburger
      onClose={CloseBurgerMenu}
      MenuVersion={BurgerOpen}
      MainActive={MainActive}
    /> : ''
      }
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default Main;

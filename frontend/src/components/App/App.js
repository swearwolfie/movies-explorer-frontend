import React from "react";
import "../../index.css";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Routes } from 'react-router-dom'; // импортируем Routes

function App() {
  return (
    <>
      {/* <CurrentUserContext.Provider>
      <Header />
      <Main />
      <Footer />
      </CurrentUserContext.Provider> */}
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;

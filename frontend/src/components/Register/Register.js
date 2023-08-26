import React from "react";
import "./Register.css";
import Logo from "../Logo/Logo";
import Inputs from "../Inputs/Inputs";
import { Link } from "react-router-dom";
import { useState } from 'react';

function Register({ onSignUp }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");

  function handleEmailInfo(e) {
    setUserEmail(e.target.value);
    console.log('1', userEmail)
  }

  function handlePasswordInfo(e) {
    setUserPassword(e.target.value);
    console.log('2', userPassword)
  }

  function handleNameInfo(e) {
    setUserName(e.target.value);
    console.log('3', userName)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('handlesubmit', userEmail)
    // Передаём значения управляемых компонентов во внешний обработчик
    onSignUp({
      email: userEmail,
      password: userPassword,
      name: userName,
    });
  }

  return (
    <main className="register">
      <Logo />
      <h2 className="register__greeting">Добро пожаловать!</h2>
      <form
        className="register__form"
        onSubmit={handleSubmit}
        name="register-form"
      >
        <h3 className="inputs__minititle">Имя</h3>
        <input
          className="inputs__input"
          id="register-name-input"
          name="register-name"
          placeholder="Виталий"
          onChange={handleNameInfo}
          type="text"
          minLength="6"
          maxLength="200"
          value={userName}
          required
        />
        <Inputs handleEmailInfo={handleEmailInfo} handlePasswordInfo={handlePasswordInfo} userEmail={userEmail} userPassword={userPassword} />
        <button className="register__submit" type="submit" value="register">
          Зарегистрироваться
        </button>
        <div className="register__container">
        <p className="register__text">Уже зарегистрированы?</p>
        <Link to="/signin" className="register__link">
          Войти
        </Link>
      </div>
      </form>
    </main>
  );
}

export default Register;

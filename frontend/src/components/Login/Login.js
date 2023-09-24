import React from "react";
import "./Login.css";
import Logo from "../Logo/Logo";
import Inputs from "../Inputs/Inputs";
import { Routes, Route, Link } from "react-router-dom";
import { useCallback } from "react";
import { useState } from 'react';

function Login({ onSignIn }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const validateEmail = useCallback((value) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return emailRegex.test(value);
  }, []);

  const validatePassword = useCallback((value) => {
    return value.length >= 10;
  }, [])

  function handleEmailInfo(e) {
    setUserEmail(e.target.value);
  }

  function handlePasswordInfo(e) {
    setUserPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onSignIn({
      email: userEmail,
      password: userPassword,
    });
  }

  return (
    <main className="login">
      <Logo />
      <h2 className="login__greeting">Рады видеть!</h2>
      <form className="login__form" onSubmit={handleSubmit} name="login-form">
        <Inputs handleEmailInfo={handleEmailInfo} handlePasswordInfo={handlePasswordInfo} userEmail={userEmail} userPassword={userPassword} validatePassword={validatePassword} validateEmail={validateEmail} />
        <button className="login__submit" type="submit" value="Login" disabled={!validateEmail(userEmail) || !validatePassword(userPassword)}>
          Войти
        </button>
        <div className="login__container">
        <p className="login__text">Ещё не зарегистрированы?</p>
        <Link to="/signup" className="login__link">
          Регистрация
        </Link>
      </div>
      </form>
    </main>
  );
}

export default Login;

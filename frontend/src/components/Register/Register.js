// план: сначала сделать механику для мгновенного ответа под инпутами, потом сделать индивидуальные ошибки

import React from "react";
import "./Register.css";
import Logo from "../Logo/Logo";
import Inputs from "../Inputs/Inputs";
import { Link } from "react-router-dom";
import { useState, useCallback } from 'react';

function Register({ onSignUp }) {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");

  const validateName = useCallback((value) => {
    const regex = /^[a-zA-Z0-9а-яА-Я\s.]+$/; // валидировать что в имени только цифры и буквы
    return regex.test(value) && value.length >= 2 && value.length <= 40;
  }, []);

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

  function handleNameInfo(e) {
    setUserName(e.target.value);

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
        <label className="inputs__minititle">Имя</label>
        <input
          className={`inputs__input ${validateName(userName) ? '' : "inputs__input_invalid"}`}
          id="register-name-input"
          name="register-name"
          placeholder="Виталий"
          onChange={handleNameInfo}
          type="text"
          minLength="2"
          maxLength="40"
          value={userName}
          required
        />
        <span className='inputs__input-error'>{validateName(userName)? '' : 'Поле "Имя" должно содержать от 2 до 40 букв или цифр'}</span>
        <Inputs handleEmailInfo={handleEmailInfo} handlePasswordInfo={handlePasswordInfo} userEmail={userEmail} userPassword={userPassword} validatePassword={validatePassword} validateEmail={validateEmail} />
        <button className="register__submit" type="submit" value="register" disabled={!validateName(userName) || !validateEmail(userEmail) || !validatePassword(userPassword)}>
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

// {isValid? '' : 'Что-то пошло не так...'}
// {`inputs__input ${validateName(userName) ? '' : "inputs__input_invalid"}`}
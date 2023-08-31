import React from 'react';
import './Inputs.css';

function Inputs({ handleEmailInfo, userEmail, handlePasswordInfo, userPassword, validateEmail, validatePassword }) {
  // const validateEmail = useCallback((value) => {
  //   const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  //   return emailRegex.test(value);
  // }, []);

  // const validatePassword = useCallback((value) => {
  //   // const regex = /^[a-zA-Z0-9а-яА-Я]+$/; // валидировать что в имени только цифры и буквы
  //   return value.length >= 10;
  // }, [])

  return (
    <>
      <label className="inputs__minititle">Email</label>
      <input
        className={`inputs__input ${validateEmail(userEmail) ? '' : "inputs__input_invalid"}`}
        id='inputs-email-input'
        name="inputs-email"
        placeholder="pochta@yandex.ru"
        onChange={handleEmailInfo}
        type="email"
        minLength="2"
        maxLength="200"
        value={userEmail || ''}
        required
      />
      <span className="inputs__input-error">{validateEmail(userEmail)? '' : `Поле 'email' должно содержать электронную почту`}</span>
      <label className="inputs__minititle">Пароль</label>
      <input
        className={`inputs__input ${validatePassword(userPassword) ? '' : "inputs__input_invalid"}`}
        id="inputs-password-input"
        name="inputs-password"
        placeholder="Пароль"
        onChange={handlePasswordInfo}
        type="password"
        minLength="6"
        maxLength="200"
        value={userPassword || ''}
        required
      />
      <span className="inputs__input-error">{validatePassword(userPassword)? '' : 'Пароль должен состоять минимум из 10 символов'}</span>
    </>
  );
}

export default Inputs;
import React from 'react';
import './Inputs.css';

function Inputs() {
  return (
    <>
      <h3 className="inputs__minititle">Email</h3>
      <input
        className="inputs__input"
        id="inputs-email-input"
        name="inputs-email"
        placeholder="pochta@yandex.ru"
        // onChange={handleEmailInfo}
        type="email"
        minLength="2"
        maxLength="200"
        // value={userEmail}
        required
      />
      <h3 className="inputs__minititle">Пароль</h3>
      <input
        className="inputs__input inputs__input_invalid"
        id="inputs-password-input"
        name="inputs-password"
        placeholder="Пароль"
        // onChange={handlePasswordInfo}
        type="password"
        minLength="6"
        maxLength="200"
        // value={userPassword}
        required
      />
      <span className="inputs__input-error">Что-то пошло не так...</span>
    </>
  );
}

export default Inputs;
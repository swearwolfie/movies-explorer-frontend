import React from 'react';
import './Register.css';
import Logo from '../Logo/Logo';
import Inputs from '../Inputs/Inputs';
// import { useState } from 'react';

function Register({ handleSubmit }) {  //  { onSignIn }
  // const [userEmail, setUserEmail] = useState("");
  // const [userPassword, setUserPassword] = useState("");
  // const [userName, setUserName] = useState("");

  // function handleEmailInfo(e) {
  //   setUserEmail(e.target.value);
  // }

  // function handlePasswordInfo(e) {
  //   setUserPassword(e.target.value);
  // }

  // function handleNameInfo(e) {
  //   setUserName(e.target.value);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   // Передаём значения управляемых компонентов во внешний обработчик
  //   onSignIn({
  //     email: userEmail,
  //     password: userPassword,
  //     name: userName,
  //   });
  // }

  return (
    <section className='register'>
      <Logo />
      <h2 className='register__greeting'>Добро пожаловать!</h2>
      <form className='register__form' onSubmit={handleSubmit} name="register-form">
      <h3 className='register__name'>Имя</h3>
      <input
          className="register__input"
          id="register-name-input"
          name="register-name"
          placeholder="Виталий"
          // onChange={handleNameInfo}
          type="text"
          minLength="6"
          maxLength="200"
          // value={userPassword}
          required
        />
        <Inputs />
        <button className="register__submit" type="submit" value="register">
        Зарегистрироваться
        </button>
      </form>
    </section>
  )
}

export default Register;
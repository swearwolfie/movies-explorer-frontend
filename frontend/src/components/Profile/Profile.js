import { React, useEffect, useContext, useState } from "react";
import "./Profile.css";
import Hamburger from "../Hamburger/Hamburger";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Navigation from "../Navigation/Navigation";
import { useCallback } from "react";
// import ProfileEdit from "../ProfileEdit/ProfileEdit";

function Profile({ onExit, BurgerOpen, CloseBurgerMenu, onUpdateUser, onBurger }) {
  const [nickname, setNickame] = useState("");
  const [email, setEmail] = useState("");
  const [hasValueChanged, setHasValueChanged] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  const validateName = useCallback((value) => {
    const regex = /^[a-zA-Z0-9а-яА-Я\s.]+$/; // валидировать что в имени только цифры и буквы
    return regex.test(value) && value.length >= 2 && value.length <= 40;
  }, []);

  const validateEmail = useCallback((value) => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return emailRegex.test(value);
  }, []);

  useEffect(() => {
    setNickame(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleNameChange(e) {
    const value = e.target.value;
    setNickame(value);
    setHasValueChanged(value !== '' && value !== currentUser.name);
  }

  function handleEmailChange(e) {
    const value = e.target.value;
    setEmail(value);
    console.log(currentUser.email, 'hey');
    setHasValueChanged(value !== '' && value !== currentUser.email);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
      // Передаём значения управляемых компонентов во внешний обработчик
      onUpdateUser({
        name: nickname,
        email: email,
      });
      setHasValueChanged(false);
  }

  return (
    <main className="profile">
      <Navigation onNavBurger={onBurger} />
      {BurgerOpen ? (
        <Hamburger onClose={CloseBurgerMenu} MenuVersion={BurgerOpen} />
      ) : (
        ""
      )}
      <h2 className="profile__greeting">Привет, {nickname}</h2>
      <form onSubmit={handleSubmit} className="profile__form">
        <div className="profile__container">
          <label className="profile__text profile__text_name">Имя</label>
          <input
            type="text"
            className={`profile__text profile__text_name profile__text_input ${validateName(nickname) ? '' : "profile__text_invalid"}`}
            placeholder="бла бла"
            value={nickname || ""}
            id="nameInput"
            onChange={handleNameChange}
          />
        </div>
        <span className='profile__input-error'>{validateName(nickname)? '' : 'поле "имя" должно содержать от 2 до 40 букв или цифр'}</span>
        <div className="profile__container profile__container_down">
          <label className="profile__text profile__text_email">E-mail</label>
          <input
            type="text"
            className={`profile__text profile__text_email profile__text_input ${validateEmail(email) ? '' : "profile__text_invalid"}`}
            value={email || ""}
            onChange={handleEmailChange}
          />
        </div>
        <span className="profile__input-error">{validateEmail(email)? '' : `Поле 'email' должно содержать электронную почту`}</span>
        <button className='profile__button profile__button_submit' type="submit" value="edit" disabled={!hasValueChanged || !validateName(nickname) || !validateEmail(email)}>
            Редактировать
          </button>
      </form>
      <button className="profile__button profile__button_logout" onClick={onExit}>
        Выйти из аккаунта
      </button>
    </main>
  );
}

export default Profile;
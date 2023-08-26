import { React, useEffect, useContext, useState } from "react";
import "./Profile.css";
import Hamburger from "../Hamburger/Hamburger";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Navigation from "../Navigation/Navigation";
// import ProfileEdit from "../ProfileEdit/ProfileEdit";

function Profile({ onExit, BurgerOpen, CloseBurgerMenu, onUpdateUser, onBurger }) {
  const [nickname, setNickame] = useState("");
  const [email, setEmail] = useState("");
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setNickame(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleNameChange(e) {
    setNickame(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
      // Передаём значения управляемых компонентов во внешний обработчик
      onUpdateUser({
        name: nickname,
        email: email,
      });
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
          <h3 className="profile__text profile__text_name">Имя</h3>
          <input
            type="text"
            className="profile__text profile__text_name profile__text_input"
            placeholder="бла бла"
            value={nickname || ""}
            onChange={handleNameChange}
          />
        </div>
        <div className="profile__container profile__container_down">
          <h3 className="profile__text profile__text_email">E-mail</h3>
          <input
            type="text"
            className="profile__text profile__text_email profile__text_input"
            value={email || ""}
            onChange={handleEmailChange}
          />
        </div>
        <button className='profile__button profile__button_submit' type="submit" value="edit">
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
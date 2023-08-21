import { React, useEffect, useContext, useState } from "react";
import "./Profile.css";
import Hamburger from "../Hamburger/Hamburger";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import ProfileEdit from "../ProfileEdit/ProfileEdit";

function Profile({ onExit, BurgerOpen, CloseBurgerMenu, onUpdateUser }) {
  const [nickname, setNickame] = useState("");
  const [email, setEmail] = useState("");
  const currentUser = useContext(CurrentUserContext);
  const [readOnly, setReadOnly] = useState(true);

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

    if (readOnly) {
      setReadOnly(false);
      return
    } else {
      // Передаём значения управляемых компонентов во внешний обработчик
      onUpdateUser({
      name: nickname,
      email: email,
    });
    setReadOnly(true);
    }
  }

  return (
    <main className="profile">
      {BurgerOpen ? (
        <Hamburger onClose={CloseBurgerMenu} MenuVersion={BurgerOpen} />
      ) : (
        ""
      )}
      <h2 className="profile__greeting">Привет, Василий!</h2>
      <form onSubmit={handleSubmit}>
    <div className="profile__container">
      <h3 className="profile__text profile__text_name">Имя</h3>
      <input
        readOnly={readOnly}
        type="text"
        className="profile__text profile__text_name"
        value={nickname}
        onChange={handleNameChange}
      />
    </div>
    <div className="profile__container">
      <h3 className="profile__text profile__text_email">E-mail</h3>
      <input
        readOnly={readOnly}
        type="text"
        className="profile__text profile__text_email"
        value={email}
        onChange={handleEmailChange}
      />
    </div>
  <div className="profile__buttons">
    <button className="profile__button" type="submit" value="edit">
      Редактировать
    </button>
    <button className="profile__button" onClick={onExit}>
      Выйти из аккаунта
    </button>
  </div>
  </form>
    </main>
  );
}

export default Profile;

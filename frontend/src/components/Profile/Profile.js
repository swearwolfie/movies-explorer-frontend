import React from 'react';
import './Profile.css';

function Profile({ onEdit, onExit }) {
  return (
    <section className='profile'>
      <h2 className='profile__greeting'>Привет, Василий!</h2>
      <div className='profile__container'>
        <h3 className='profile__text profile__text_name'>Имя</h3>
        <p className='profile__text profile__text_name'>Vasili</p>
      </div>
      <div className='profile__container'>
      <h3 className='profile__text profile__text_email'>E-mail</h3>
      <p className='profile__text profile__text_email'>vasiliisonfire@gmail.com</p>
      </div>
      <button className="profile__button" onClick={onEdit}>
                Редактировать
              </button>
              <button className="profile__button" onClick={onExit}>
              Выйти из аккаунта
              </button>
    </section>
  )
}

export default Profile;
import React from 'react';
import './Hamburger.css';
import { Link } from 'react-router-dom';
import Account from '../Account/Account';

function Hamburger() {
  return (
    <section className="hamburger">
      <div className='hamburger__container'>
        <ul className='hamburger__list'>
        <li className='hamburger__list-item'>
          <Link to="/" className="hamburger__link">
                      Главная
              </Link>
          </li>
          <li className='hamburger__list-item'>
          <Link to="/movies" className="hamburger__link hamburger__link_active">
                   Фильмы
            </Link>
          </li>
          <li className='hamburger__list-item'>
          <Link to="/saved-movies" className="hamburger__link">
                  Сохраненные фильмы
              </Link>
          </li>
        </ul>
        <Account />
      </div>
    </section>
  )
}

export default Hamburger;

/*
1. сделать бургер кнопку в хедере
2. установить useState в app
3. добавить туда элемент хамбурга
*/
import React from 'react';
import './Footer.css';

let today = new Date();
let year = today.getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__project">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__container'>
      <p className="footer__copyright">© {year}</p>
      <div className='footer__links-container'>
      <a href="https://practicum.yandex.ru/" className="footer__link" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
      <a href="https://github.com/swearwolfie" className="footer__link" target="_blank" rel="noreferrer">Github</a>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
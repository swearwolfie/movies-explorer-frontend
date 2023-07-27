import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <section id='about-me' className='aboutme'>
      <h2 className='aboutme__title'>Студент</h2>
      <div className='aboutme__container'>
        <div className='aboutme__column aboutme__column_info'>
          <h3 className='aboutme__name'>Мария</h3>
          <p className='aboutme__job'>Фронтенд-разработчик, 31 год</p>
          <p className='aboutme__info'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
          <a href="https://github.com/swearwolfie" className="aboutme__link" target="_blank" rel="noreferrer">Github</a>
        </div>
        <div className='aboutme__column'>
          <div className='aboutme__avatar'></div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
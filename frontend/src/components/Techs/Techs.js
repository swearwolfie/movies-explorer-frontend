import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <div id='techs' className='techs'>
      <h2 className='techs__title'>Технологии</h2>
      <div className='techs__btm'></div>
      <h3 className='techs__subtitle'>7 технологий</h3>
      <p className='techs__info'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className='techs__section'>
        <li className='techs__list'>
          <p className='techs__names'>HTML</p>
        </li>
        <li className='techs__list'>
        <p className='techs__names'>CSS</p>
        </li>
        <li className='techs__list'>
        <p className='techs__names'>JS</p>
        </li>
        <li className='techs__list'>
        <p className='techs__names'>REACT</p>
        </li>
        <li className='techs__list'>
        <p className='techs__names'>Git</p>
        </li>
        <li className='techs__list'>
        <p className='techs__names'>Express.js</p>
        </li>
        <li className='techs__list'>
        <p className='techs__names'>MongoDB</p>
        </li>
      </ul>
    </div>
  )
}

export default Techs;
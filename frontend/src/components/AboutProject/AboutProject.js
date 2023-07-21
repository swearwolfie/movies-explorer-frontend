import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section id='about-project' className='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__info'>
        <div className='about-project__column'>
          <h3 className='about-project__column-title'>Дипломный проект включал 5 этапов</h3>
          <p className='about-project__column-data'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='about-project__column'>
          <h3 className='about-project__column-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='about-project__column-data'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='about-project__timelime'>
        <div className='about-project__chrono about-project__chrono_one'>
          <div className='about-project__chrono about-project__chrono_bck-one'>
          <p className='about-project__timelime-data about-project__timelime-data_one'>1 неделя</p>
          </div>
          <h4 className='about-project__timelime-title'>Back-end</h4>
        </div>
        <div className='about-project__chrono about-project__chrono_four'>
          <div className='about-project__chrono about-project__chrono_bck-four'>
          <p className='about-project__timelime-data about-project__timelime-data_four'>4 недели</p>
          </div>
          <h4 className='about-project__timelime-title'>Front-end</h4>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;
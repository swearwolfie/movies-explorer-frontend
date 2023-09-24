import './MoviesError.css';
import React from 'react';

function MoviesErrors ({ serverError }) {
  return (
    <div className='movies-error'>
    {/* <div className="movies-error__button movies-error__button_cross" ></div>  */}
      <p className={`movies-error__text ${serverError ? 'movies-error__text_s' : ''}`}>{serverError ? 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз' : 'Ничего не найдено'}</p> 
    </div>
  )
}

export default MoviesErrors;
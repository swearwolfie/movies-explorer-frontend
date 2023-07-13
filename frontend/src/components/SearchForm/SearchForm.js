import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onFind }) {
  return (
    <div className='search-form'> 
    <div className='search-form__container'>
    <input type="text" className='search-form__input' placeholder="Фильм" />
      {/* <h2 className='search-form__title'>Фильм</h2> */}
      <button className="search-form__button" onClick={onFind}>Найти</button>
    </div>
    <FilterCheckbox />
    </div>
  )
}

export default SearchForm;
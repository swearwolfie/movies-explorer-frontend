import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ onFind }) {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <input type="text" className="search-form__input" placeholder="Фильм" />
        <button className="search-form__button" onClick={onFind}>
          Найти
        </button>
      </div>
      <FilterCheckbox />
    </section>
  );
}

export default SearchForm;

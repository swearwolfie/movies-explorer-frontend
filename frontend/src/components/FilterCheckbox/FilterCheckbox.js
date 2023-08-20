import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({ handleOnChange, isChecked }) {

  return (
    <section className="filter">
      <label className="filter__switch">
        <input
          type="checkbox"
          id="switch"
          className="filter__input"
          onChange={handleOnChange}
          checked={isChecked || ''}
        />
        <span className="filter__slider"></span>
      </label>
      <h3 className="filter__title">Короткометражки</h3>
    </section>
  );
}

export default FilterCheckbox;

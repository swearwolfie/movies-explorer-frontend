import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filter">
      <label class="filter__switch">
        <input type="checkbox" className="filter__input" />
        <span className="filter__slider"></span>
      </label>
      <h3 className="filter__title">Короткометражки</h3>
    </div>
  );
}

export default FilterCheckbox;

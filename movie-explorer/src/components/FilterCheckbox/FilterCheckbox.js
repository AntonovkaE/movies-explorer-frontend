import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (<label className="filter"  htmlFor="switch">
      <input className="filter__input"  type="checkbox" id="switch"/>
      <span className="filter__pseudo-item"></span>
      <span className="filter__label-text">Короткометражки</span>
  </label>
  );
}

export default FilterCheckbox;

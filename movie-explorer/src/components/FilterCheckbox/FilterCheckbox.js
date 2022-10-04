import React, { useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  const [isChecked, setIsChecked] = useState(JSON.parse(localStorage.isChecked) || false)
  const handleInputChange = (e) => {
    setIsChecked(e.target.checked);
    localStorage.setItem('isChecked', JSON.stringify(isChecked))
  }
  return (<label className="filter"  htmlFor="switch">
      <input className="filter__input"  type="checkbox" id="switch" checked={isChecked}
             onChange={handleInputChange}/>
      <span className="filter__pseudo-item"></span>
      <span className="filter__label-text">Короткометражки</span>
  </label>
  );
}

export default FilterCheckbox;

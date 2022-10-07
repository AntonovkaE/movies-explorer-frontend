import React, { useEffect, useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (e) => {
    setIsChecked(e.target.checked);
    localStorage.setItem('isChecked', JSON.stringify(e.target.checked));
  };

  useEffect( () => {
    if (localStorage.isChecked !== undefined) {
      setIsChecked(JSON.parse(localStorage.isChecked));
    }
  }, [])

  return (<label className="filter" htmlFor="switch">
      <input className="filter__input" type="checkbox" id="switch" checked={isChecked}
             onChange={handleInputChange}/>
      <span className="filter__pseudo-item"></span>
      <span className="filter__label-text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;

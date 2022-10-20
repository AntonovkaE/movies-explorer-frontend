import React, { useEffect, useState } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({onToggle, sectionSearchInput}) {
  const [isChecked, setIsChecked] = useState({[sectionSearchInput]: Boolean(JSON.parse(localStorage.isChecked)[sectionSearchInput])});

  const handleInputChange = (e) => {
    setIsChecked({[sectionSearchInput]: e.target.checked });
    localStorage.setItem('isChecked', JSON.stringify({[sectionSearchInput]: e.target.checked }));
    onToggle(JSON.parse(localStorage.isChecked)[sectionSearchInput]);
  };

  useEffect( () => {
    if (localStorage.isChecked[sectionSearchInput] !== undefined) {
      setIsChecked({[sectionSearchInput]: JSON.parse(localStorage.isChecked)});
    }
  }, [isChecked[sectionSearchInput]])

  return (<label className="filter" htmlFor="switch">
      <input className="filter__input" type="checkbox" id="switch" checked={isChecked[sectionSearchInput]}
             onChange={handleInputChange}/>
      <span className="filter__pseudo-item"></span>
      <span className="filter__label-text">Короткометражки</span>
    </label>
  );
}

export default FilterCheckbox;

import React from 'react';
import './NavigationPopup.css';
import Navigation from '../Navigation/Navigation';

function NavigationPopup({ onClose, isOpen }) {
  return (
    <div className={`navigationPopup ${isOpen ? 'navigationPopup_open' : ''}`}>
      <button onClick={onClose} className="navigationPopup__close"></button>
      <Navigation isNavigationHidden={false} isFullScreen={true} onClose={onClose}/>
    </div>
  )
}

export default NavigationPopup;

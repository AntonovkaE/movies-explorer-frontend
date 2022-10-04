import React from 'react'
import './Preloader.css'

const Preloader = ({isHidden}) => {
  return (
    <div className={`preloader ${isHidden ? 'preloader_hidden' : ''}`}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  )
};

export default Preloader

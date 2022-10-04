import React from 'react';
import './Button.css';

function Button({ status="", type="", text=''}) {
  return (<button type="submit" className={`button button_${type} button_${status}`}>
    {text}
  </button>);
}

export default Button;

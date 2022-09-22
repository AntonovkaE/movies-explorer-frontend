import React from 'react';
import AboutProject from '../AboutProject/AboutProject';
import Promo from '../Promo/Promo';
import './Main.css'
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
function Main() {
  return (
    <>
      <Promo/>
      <AboutProject/>
      <Techs />
      <AboutMe />
    </>)
}

export default Main;

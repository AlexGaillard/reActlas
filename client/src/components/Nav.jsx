import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-regular-svg-icons'

const Nav = ({ darkMode, setDarkMode }) => {

  const handleClick = () => {
    let body = document.querySelector('body');
    if (!darkMode) {
      setDarkMode(true)
      body.setAttribute('class', 'dark');
    }
    else {
      setDarkMode(false);
      body.removeAttribute('class');
    }
  }

  return(
    <nav id="header">
      <h1>Where in the world?</h1>
      <p onClick={handleClick}>{<FontAwesomeIcon icon={faMoon} />}Dark Mode</p>
    </nav>
  );

};

export default Nav;
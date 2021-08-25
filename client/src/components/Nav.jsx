import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as fasMoon } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ darkMode, setDarkMode }) => {
  const handleClick = () => {
    if (!darkMode) setDarkMode(true);
    else setDarkMode(false);
  };

  return (
    <nav id="header">
      <h1>Where in the world?</h1>
      <p onClick={handleClick}>
        {<FontAwesomeIcon icon={darkMode ? fasMoon : faMoon} />}Dark Mode
      </p>
    </nav>
  );
};

export default Nav;

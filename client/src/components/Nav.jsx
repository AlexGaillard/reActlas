import React, {useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as fasMoon } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ darkMode, setDarkMode }) => {
  const handleClick = () => {
    let body = document.querySelector("body");
    if (!darkMode) {
      setDarkMode(true);
      body.setAttribute("class", "dark");
    } else {
      setDarkMode(false);
      body.removeAttribute("class");
    }
  };

  useEffect(() => {
    const favicon = document.getElementById("favicon");
    if (darkMode) favicon.href = "favicon_dark.png"
    else favicon.href = "favicon_light.png"
  }, [darkMode])

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

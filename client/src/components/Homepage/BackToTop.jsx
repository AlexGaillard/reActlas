import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";

const BackToTop = () => {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return(
    <button aria-label="Scroll to top" onClick={handleClick} id="back-to-top"><FontAwesomeIcon icon={faArrowAltCircleUp} /></button>
  )

}

export default BackToTop;
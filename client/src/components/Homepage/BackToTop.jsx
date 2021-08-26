import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";
import { pageVariants, buttonTransition } from "../../Animation.js";


const BackToTop = () => {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return(
    <motion.button
      aria-label="Scroll to top"
      onClick={handleClick}
      id="back-to-top"
      initial="down"
      animate="up"
      exit="down"
      variants={pageVariants}
      transition={buttonTransition}
    >
      <FontAwesomeIcon icon={faArrowAltCircleUp} />
    </motion.button>
  )

}

export default BackToTop;
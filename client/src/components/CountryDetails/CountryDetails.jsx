import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import DetailsLeft from "./DetailsLeft.jsx";
import DetailsRight from "./DetailsRight.jsx";
import BorderCountries from "./BorderCountries.jsx";
import { pageVariants, pageTransition } from "../../Animation.js";

const CountryDetails = (props) => {
  let country = props.location.state.country || props.location.state.border;
  let history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  const parsePopulation = () => {
    let parsed = new Intl.NumberFormat("en-US");
    return parsed.format(country.population);
  };

  return (
    <>
      <Helmet>
        <title>{country.name}</title>
        <link id="favicon" type="image/svg" rel="icon" href={country.flag} />
      </Helmet>
      <motion.div
        className="motion"
        initial="right"
        animate="mid"
        exit="right"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div id="country-details">
          <button className="back-button" type="button" onClick={handleClick}>
            <FontAwesomeIcon icon={faLongArrowAltLeft} /> Back
          </button>
          <img src={country.flag} alt={`Flag of ${country.name}`}></img>
          <div>
            <h3>{country.name}</h3>
            <DetailsLeft
              nativeName={country.nativeName}
              parsePopulation={parsePopulation}
              region={country.region}
              subregion={country.subregion}
              capital={country.capital}
            />
            <DetailsRight
              topLevelDomain={country.topLevelDomain}
              currencies={country.currencies}
              languages={country.languages}
            />
            <BorderCountries countryBorders={country.borders} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CountryDetails;

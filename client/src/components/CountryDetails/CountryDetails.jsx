import React, { useState, useEffect } from "react";
import { getBorders } from "../../requests.js";
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
  const [borders, setBorders] = useState([]);
  let history = useHistory();

  useEffect(() => {
    let queryString = "";
    if (country.borders.length) {
      country.borders.forEach((border) => (queryString += border + ";"));
      getBorders(queryString).then((res) => {
        setBorders(res.data);
      });
    }
  }, []);

  const handleClick = () => {
    history.push("/");
  };

  const parsePopulation = () => {
    let parsed = new Intl.NumberFormat("en-US");
    return parsed.format(country.population);
  };

  return (
    <motion.div
      id="country-details"
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Helmet>
        <link id="favicon" rel="icon" href={country.flag} />
      </Helmet>
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
        <BorderCountries borders={borders} />
      </div>
    </motion.div>
  );
};

export default CountryDetails;

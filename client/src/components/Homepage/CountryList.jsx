import React, { useState } from "react";
import { Link } from "react-router-dom";
import CountryCard from "../Homepage/CountryCard.jsx";
import DelayLink from 'react-delay-link';

const CountryList = ({ displayed }) => {
  return displayed.map((country, index) => {

    const handleClick = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    return (
      <DelayLink
        delay={(index > 3) ? 500 : 0}
        clickAction={handleClick}
        to={{ pathname: `/${country.name}`, state: { country } }}
        key={country.alpha3Code}
      >
        <CountryCard key={country.name} countryData={country} />
      </DelayLink>
    );
  });
};

export default CountryList;

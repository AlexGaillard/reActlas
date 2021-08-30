import React, { useState } from "react";
import { Link } from "react-router-dom";
import CountryCard from "../Homepage/CountryCard.jsx";

const CountryList = ({ displayed }) => {
  return displayed.map((country, index) => {
    const handleClick = () => {
      setTimeout(function () {
        window.scrollTo({
          top: 0,
        });
      }, 550);
    };

    return (
      <Link
        onClick={handleClick}
        to={{ pathname: `/${country.name}`, state: { country } }}
        key={country.alpha3Code}
      >
        <CountryCard key={country.name} countryData={country} />
      </Link>
    );
  });
};

export default CountryList;

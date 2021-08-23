import React from "react";

const DetailsLeft = ({ topLevelDomain, currencies, languages }) => {
  return (
    <ul className="details-right">
      <li>
        <span>Top Level Domain:</span> {topLevelDomain}
      </li>
      <li>
        <span>Currencies:</span>{" "}
        {currencies.map((currency, index) => {
          if (currencies.length > 1) {
            if (index !== currencies.length - 1) return currency.name + ", ";
            else return currency.name;
          } else return currency.name;
        })}
      </li>
      <li>
        <span>Languages:</span>{" "}
        {languages.map((language, index) => {
          if (languages.length > 1) {
            if (index !== languages.length - 1) return language.name + ", ";
            else return language.name;
          } else return language.name;
        })}
      </li>
    </ul>
  );
};

export default DetailsLeft;

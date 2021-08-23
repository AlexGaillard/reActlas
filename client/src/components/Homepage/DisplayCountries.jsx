import React from 'react';
import { Link } from 'react-router-dom';
import CountryCard from '../Homepage/CountryCard.jsx';

const DisplayCountries = ({ displayed }) => {

  return(
    displayed.map(country => {
      return(
        <Link to={ { pathname:`/${country.name}`, state: { country } } } key={ country.alpha3Code } >
          <CountryCard key={ country.name } countryData={ country } />
        </Link>
      );
    })
  );

};

export default DisplayCountries;
import React, { useState, useEffect } from 'react';
import { getBorders } from '../requests.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import DetailsLeft from './CountryDetails/DetailsLeft.jsx';
import DetailsRight from './CountryDetails/DetailsRight.jsx';
import BorderCountries from './CountryDetails/BorderCountries.jsx';

const CountryDetails = (props) => {

  let country = props.location.state.country || props.location.state.border;
  const [borders, setBorders] = useState([]);
  let history = useHistory();

  useEffect(() => {
    let queryString = '';
    if (country.borders.length) {
      country.borders.forEach(border => queryString += border + ';');
      getBorders(queryString)
      .then(res => {
        setBorders(res.data);
      })
    }
  }, [country]);

  const handleClick = () => {
    history.push("/");
  };

  const parsePopulation = () => {
    let parsed = new Intl.NumberFormat('en-US')
    return parsed.format(country.population);
  };

  return(
    <div id="country-details">
       <button className="back-button" type="button" onClick={ handleClick }><FontAwesomeIcon icon={ faLongArrowAltLeft } /> Back</button>
      <img src={ country.flag } alt={`Flag of ${ country.name }`}></img>
      <div>
        <h3>{ country.name }</h3>
        <DetailsLeft nativeName={ country.nativeName } parsePopulation={ parsePopulation } region={ country.region } subregion={ country.subregion } capital= { country.capital } />
        <DetailsRight topLevelDomain={ country.topLevelDomain } currencies={ country.currencies } languages={ country.languages } />
        <BorderCountries borders={ borders } />
      </div>
    </div>
  );

}

export default CountryDetails;
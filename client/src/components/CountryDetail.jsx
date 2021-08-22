import React, { useState, useEffect } from 'react';
import { getBorders } from '../requests.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams, useHistory } from 'react-router-dom';

const CountryDetail = (props) => {

  let country = props.location.state.country;
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
  }

  return(
    <div id="country-details">
       <button className="back-button" type="button" onClick={handleClick}><FontAwesomeIcon icon={faLongArrowAltLeft} /> Back</button>
      <img src={ country.flag } alt={`Flag of ${country.name}`}></img>
      <div>
        <h3>{ country.name }</h3>
        <ul className="details-left">
          <li><span>Native Name:</span> { country.nativeName }</li>
          <li><span>Population:</span> { parsePopulation() }</li>
          <li><span>Region:</span> { country.region }</li>
          <li><span>Sub Region:</span> { country.subregion }</li>
          <li><span>Capital:</span> { country.capital }</li>
        </ul>
        <ul className="details-right">
          <li><span>Top Level Domain:</span> { country.topLevelDomain }</li>
          <li><span>Currencies:</span> { country.currencies.map((currency, index) => {
              if (country.currencies.length > 1) {
                if (index !== country.currencies.length - 1) return currency.name + ', '
                else return currency.name;
              }
              else return currency.name;
              }) }
          </li>
          <li><span>Languages:</span> { country.languages.map((language, index) => {
                if (country.languages.length > 1) {
                  if (index !== country.languages.length - 1) return language.name + ', '
                  else return language.name;
                }
                else return language.name;
               }) }
          </li>
        </ul>
        <div><p><span>Border Countries:</span></p> { country.borders.length ?
                borders.map(border => {
                  let country = border;
                  return <Link to={{pathname:`/${country.name}`, state: {country}}} key={border.name}><button>{ border.name }</button></Link>
                })
                : <p>None</p>
              }
        </div>

      </div>
    </div>
  );

}

export default CountryDetail;
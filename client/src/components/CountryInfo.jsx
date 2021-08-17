import React, { useState, useEffect } from 'react';
import { getBorders } from '../requests.js';
import { Link, useParams, useHistory  } from 'react-router-dom';

const CountryInfo = (props) => {

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

  return(
    <div>
       <button type="button" onClick={handleClick}>Back</button>
      <img src={ country.flag }></img>
      <div>
        <h3>{ country.name }</h3>
        <ul>
          <li>Native Name: { country.nativeName }</li>
          <li>Population: { country.population }</li>
          <li>Region: { country.region }</li>
          <li>Sub Region: { country.subregion }</li>
          <li>Capital: { country.capital }</li>
          <li>Top Level Domain: { country.topLevelDomain }</li>
          <li>Currencies: { country.currencies.map((currency, index) => {
              if (country.currencies.length > 1) {
                if (index !== country.currencies.length - 1) return currency.name + ', '
                else return currency.name;
              }
              else return currency.name;
              }) }
          </li>
          <li>Languages: { country.languages.map((language, index) => {
                if (country.languages.length > 1) {
                  if (index !== country.languages.length - 1) return language.name + ', '
                  else return language.name;
                }
                else return language.name;
               }) }
          </li>
        </ul>
        <span>Border Countries: { country.borders.length ?
                borders.map(border => {
                  let country = border;
                  return <Link to={{pathname:`/${country.name}`, state: {country}}}><button>{ border.name }</button></Link>
                })
                : <p>None</p>
              }
        </span>

      </div>
    </div>
  );

}

export default CountryInfo;
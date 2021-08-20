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
    <div id="country-info">
       <button className="back-button" type="button" onClick={handleClick}><FontAwesomeIcon icon={faLongArrowAltLeft} /> Back</button>
      <img src={ country.flag }></img>
      <div>
        <h3>{ country.name }</h3>
        <ul>
          <li><b>Native Name:</b> { country.nativeName }</li>
          <li><b>Population:</b> { parsePopulation() }</li>
          <li><b>Region:</b> { country.region }</li>
          <li><b>Sub Region:</b> { country.subregion }</li>
          <li><b>Capital:</b> { country.capital }</li>
        </ul>
        <ul>
          <li><b>Top Level Domain:</b> { country.topLevelDomain }</li>
          <li><b>Currencies:</b> { country.currencies.map((currency, index) => {
              if (country.currencies.length > 1) {
                if (index !== country.currencies.length - 1) return currency.name + ', '
                else return currency.name;
              }
              else return currency.name;
              }) }
          </li>
          <li><b>Languages:</b> { country.languages.map((language, index) => {
                if (country.languages.length > 1) {
                  if (index !== country.languages.length - 1) return language.name + ', '
                  else return language.name;
                }
                else return language.name;
               }) }
          </li>
        </ul>
        <div><p><b>Border Countries:</b></p> { country.borders.length ?
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
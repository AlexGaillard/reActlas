import React from 'react';
import { Link, useParams, useHistory  } from 'react-router-dom';

const CountryInfo = (props) => {

  let country = props.location.state.country;
  let borders = props.location.state.borders;
  const countryName = country.name;

  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

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
        <span>Border Countries: { borders.length > 1 ? borders.map(border => {
                let country = border;
                if (countryName !== country.name)
                return  <Link to={{pathname:`/${country.name}`, state: {country, borders}}}><button>{ border.name }</button></Link>
                })
                : <p>None</p>
              }
        </span>

      </div>
    </div>
  );

}

export default CountryInfo;
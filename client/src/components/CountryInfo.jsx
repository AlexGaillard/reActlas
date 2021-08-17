import React from 'react';
import { useParams, useHistory  } from 'react-router-dom';

const CountryInfo = (props) => {

  let countryData = props.location.state.country;
  let borders = props.location.state.borders;
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return(
    <div>
       <button type="button" onClick={handleClick}>Back</button>
      <img src={ countryData.flag }></img>
      <div>
        <h3>{ countryData.name }</h3>
        <ul>
          <li>Native Name: { countryData.nativeName }</li>
          <li>Population: { countryData.population }</li>
          <li>Region: { countryData.region }</li>
          <li>Sub Region: { countryData.subregion }</li>
          <li>Capital: { countryData.capital }</li>
          <li>Top Level Domain: { countryData.topLevelDomain }</li>
          <li>Currencies: { countryData.currencies.map((currency, index) => {
              if (countryData.currencies.length > 1) {
                if (index !== countryData.currencies.length - 1) return currency.name + ', '
                else return currency.name;
              }
              else return currency.name;
              }) }
          </li>
          <li>Languages: { countryData.languages.map((language, index) => {
                if (countryData.languages.length > 1) {
                  if (index !== countryData.languages.length - 1) return language.name + ', '
                  else return language.name;
                }
                else return language.name;
               }) }
          </li>
        </ul>
        <span>Border Countries: { borders.length ? borders.map(border => {
                      return <button>{ border.name }</button>
                    }) : <p>None</p> }
        </span>
      </div>
    </div>
  )

}

export default CountryInfo;
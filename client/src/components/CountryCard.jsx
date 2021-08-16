import React from 'react';

const CountryCard = ({ countryData }) => {

  return (
    <div class="country">
      <img src={ countryData.flag }></img>
      <div>
        <h3>{ countryData.name }</h3>
        <p>Population: { countryData.population }</p>
        <p>Region: { countryData.region }</p>
        <p>Capital: { countryData.capital }</p>
      </div>
    </div>
  )

}

export default CountryCard;
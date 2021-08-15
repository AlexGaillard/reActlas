import React from 'react';

const CountryCard = ({ countryData }) => {

  return (
    <div class="country">
      <img src={ countryData.flag }></img>
      <h3>{ countryData.name }</h3>
      <p>Population: { countryData.population }</p>
      <p>Region: { countryData.region }</p>
      <p>Capital: { countryData.capital }</p>
    </div>
  )

}

export default CountryCard;
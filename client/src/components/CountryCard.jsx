import React from 'react';

const CountryCard = ({ countryData }) => {

  return (
    <div className="country">
      <img src={ countryData.flag }></img>
      <div>
        <h3>{ countryData.name }</h3>
        <p><strong>Population:</strong> { countryData.population }</p>
        <p><strong>Region:</strong> { countryData.region }</p>
        <p><strong>Capital:</strong> { countryData.capital }</p>
      </div>
    </div>
  )

}

export default CountryCard;
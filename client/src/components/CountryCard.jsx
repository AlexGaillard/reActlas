import React from 'react';

const CountryCard = ({ countryData }) => {

  const parsePopulation = () => {
    let parsed = new Intl.NumberFormat('en-US')
    return parsed.format(countryData.population);
  }

  return (
    <div className="country" aria-label={`See more details about ${countryData.name}`}>
      <img src={ countryData.flag } alt={`Flag of ${countryData.name}`}></img>
      <div>
        <h3>{ countryData.name }</h3>
        <p><span>Population:</span> { parsePopulation() }</p>
        <p><span>Region:</span> { countryData.region }</p>
        <p><span>Capital:</span> { countryData.capital }</p>
      </div>
    </div>
  )

}

export default CountryCard;
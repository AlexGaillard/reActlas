import React from 'react';

const CountryCard = ({ countryData }) => {

  const parsePopulation = () => {
    let parsed = new Intl.NumberFormat('en-US')
    return parsed.format(countryData.population);
  }

  return (
    <div className="country">
      <img src={ countryData.flag }></img>
      <div>
        <h3>{ countryData.name }</h3>
        <p><strong>Population:</strong> { parsePopulation() }</p>
        <p><strong>Region:</strong> { countryData.region }</p>
        <p><strong>Capital:</strong> { countryData.capital }</p>
      </div>
    </div>
  )

}

export default CountryCard;
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
        <p><b>Population:</b> { parsePopulation() }</p>
        <p><b>Region:</b> { countryData.region }</p>
        <p><b>Capital:</b> { countryData.capital }</p>
      </div>
    </div>
  )

}

export default CountryCard;
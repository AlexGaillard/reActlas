import React from 'react';

const DetailsLeft = ({ nativeName, parsePopulation, region, subregion, capital }) => {

  return(
    <ul className="details-left">
          <li><span>Native Name:</span> { nativeName }</li>
          <li><span>Population:</span> { parsePopulation() }</li>
          <li><span>Region:</span> { region }</li>
          <li><span>Sub Region:</span> { subregion }</li>
          <li><span>Capital:</span> { capital }</li>
    </ul>
  );

};

export default DetailsLeft;
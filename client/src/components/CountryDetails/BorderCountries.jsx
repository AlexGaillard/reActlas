import React from 'react';
import { Link } from 'react-router-dom';

const BorderCountries = ({ borders }) => {

  return(
    <div>
      <p><span>Border Countries:</span></p>
      { borders.length ?
          borders.map(border => {
            return(
            <Link to={{pathname:`/${border.name}`, state: {border}}} key={border.name}>
              <button>{ border.name }</button>
            </Link>
            );
          }) :
          <p>None</p>
      }
    </div>
  );

};

export default BorderCountries;
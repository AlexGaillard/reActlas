import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {

  return(
    <div className="not-found"><FontAwesomeIcon icon={ faExclamation } />
      <p>Country not found</p>
    </div>
  );

};

export default NotFound;
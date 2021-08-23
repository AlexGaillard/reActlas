import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loading = () => {

  return(
    <div className="loader">
      <FontAwesomeIcon icon={ faSpinner } spin /> <p>Loading...</p>
    </div>
  );

};

export default Loading;
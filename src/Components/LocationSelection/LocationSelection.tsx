import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { Button } from '@mui/material';
import { LoadingComponent } from '../LoadingComponent/LoadingComponent';

// declare module '@mui/material' {
//   export interface MyProps {

//     exact?: boolean;
//     to?: string;
//   }
//   export const Button extends StyledComponent<ButtonProps & MyProps> {
//   }

// }

import './LocationSelection.css';

export const LocationSelection = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getLocation = (position:any) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const catchError = () => {
    setError('Sorry, no position available.');
    console.log(error);
  };

  const handleClick = (e) => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(getLocation, catchError);
  };

  useEffect(() => {
    setIsLoading(false);
  }, [latitude, longitude]);

  return (
    <React.Fragment>
      {error && <p>{error}</p>}
      {!error && (
        <div className="location-selection">
          <button 
          className="get-stories-btn"
            // href="#text-buttons"
            // variant="outlined"
            // type="click"
            onClick={(e) => handleClick(e)}
          >
            Get Stories
          </button>
        </div>
      )}
      {isLoading && <LoadingComponent />}
      {latitude && longitude && (
        <Redirect to={`/storiesPage/${latitude}/${longitude}`} />
      )}
    </React.Fragment>
  );
};

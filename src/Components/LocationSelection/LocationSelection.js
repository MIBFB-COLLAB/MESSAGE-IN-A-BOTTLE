import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { Button } from '@mui/material';
import { LoadingComponent } from '../LoadingComponent/LoadingComponent';

import './LocationSelection.css';

export const LocationSelection = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getLocation = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const catchError = () => {
    setError('Sorry, no position available.');
    console.log(error);
  };

  const handleClick = () => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(getLocation, catchError);
  };

  useEffect(() => {
    setIsLoading(false);
  }, [latitude, longitude]);

  return (
    <>
      {error && <p>{error}</p>}
      {!error && (
        <div className="location-selection">
          <Button
            variant="outlined"
            className="get-stories-btn"
            type="click"
            onClick={(e) => handleClick(e)}
          >
            Get Stories
          </Button>
        </div>
      )}
      {isLoading && <LoadingComponent />}
      {latitude && longitude && (
        <Redirect to={`/storiesPage/${latitude}/${longitude}`} />
      )}
    </>
  );
};

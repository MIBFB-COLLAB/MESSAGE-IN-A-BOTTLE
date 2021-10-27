import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import LoadingButton from '@mui/lab/LoadingButton';
import './LocationSelection.css';

export const LocationSelection = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

    /***********************************/
      /* GET USERS CURRENT LOCATION*/
    /**********************************/
  const getLocation = (position:any) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  /***********************************/
      /* ERROR FOR NO LOCATION */
  /**********************************/
  const catchError = () => {
    setError('Sorry, no position available.');
    console.log(error);
  };

  /***********************************/
      /* INVOKE GEOLOCATION FETCH*/
  /**********************************/
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
          <LoadingButton
          loading={isLoading} 
          className="get-stories-btn"
            variant="outlined"
            onClick={(e) => handleClick(e)}
          >
            GET STORIES
          </LoadingButton>
        </div>
      )}
      {latitude && longitude && (
        <Redirect to={`/storiesPage/${latitude}/${longitude}`} />
      )}
    </React.Fragment>
  );
};

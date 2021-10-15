import React, { useState } from 'react';
import './LocationSelection.css';

export const LocationSelection = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [error, setError] = useState('');

  const handleClick = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  };

  return (
    <div className="location-selection">
      <h4>Click The Button To Get Stories Near You</h4>
      <button
        className="get-stories-btn"
        type="click"
        onClick={(e) => handleClick(e)}
      >
        Get Stories
      </button>
    </div>
  );
};

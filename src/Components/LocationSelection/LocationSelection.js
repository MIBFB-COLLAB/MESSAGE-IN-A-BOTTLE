import React, { useState } from 'react';
import './LocationSelection.css';

export const LocationSelection = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  return (
    <div className="location-selection">
      <h4>Click The Button To Get Stories Near You</h4>
      <button className="get-stories-btn" type="click" onClick={handleClick}>
        Get Stories
      </button>
    </div>
  );
};

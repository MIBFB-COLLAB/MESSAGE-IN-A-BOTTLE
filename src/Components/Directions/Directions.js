import './Directions.css';
import React, { useState, useEffect } from 'react';
import { DirectionsCard } from '../DirectionsCard/DirectionsCard';
import { getDirections } from '../../apiCalls';
import ErrorHandlingCard from '../ErrorHandlingCard/ErrorHandlingCard';

const Directions = ({ id, latitude, longitude }) => {
  const [directions, setDirections] = useState([]);
  const [error, setError] = useState('');
  // console.log(directions);

  const getStoryDirections = () => {
    getDirections(id, latitude, longitude)
      // .then((data) => console.log(data.data))
      .then((data) => setDirections(data.data))
      .catch((error) => setError(error));
  };

  useEffect(() => {
    getStoryDirections();
  }, []);

  let directionsCards;
  if (directions.length > 0) {
    directionsCards = directions.map((direction) => {
      return <DirectionsCard direction={direction.attributes} />;
    });
  } else {
    directionsCards = (
      <ErrorHandlingCard errorMessage={`Whoops, something went wrong`} />
    );
  }

  return <article className="directions">{directionsCards}</article>;
};

export default Directions;

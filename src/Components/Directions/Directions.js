import './Directions.css';
import React, { useState, useEffect } from 'react';
import { getDirections } from '../../apiCalls';

const Directions = ({ id, latitude, longitude }) => {
  const [directions, setDirections] = useState({});
  const [error, setError] = useState('');
  const { distance, narrative } = directions;

  const getStoryDirections = () => {
    getDirections(id, latitude, longitude)
      .then((data) => setDirections(data.data.attributes))
      .catch((error) => setError(error));
  };

  useEffect(() => {
    getStoryDirections();
  }, []);

  return (
    <article className="directions">
      <h3>{title}</h3>
      <p>{directions}</p>
      <button>BACK TO CARD</button>
    </article>
  );
};

export default Directions;

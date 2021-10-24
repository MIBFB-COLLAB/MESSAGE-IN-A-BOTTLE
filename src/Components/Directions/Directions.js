import './Directions.css';
import React from 'react';

const Directions = ({ id, latitude, longitude }) => {
  const [directions, setDirections] = useState({});
  const [error, setError] = useState('');

  return (
    <article className="directions">
      <h3>{title}</h3>
      <p>{directions}</p>
      <button>BACK TO CARD</button>
    </article>
  );
};

export default Directions;

import './Directions.css';
import { useState, useEffect } from 'react';
import { DirectionsCard } from '../DirectionsCard/DirectionsCard';
import { getDirections } from '../../apiCalls';
import { LoadingComponent } from '../LoadingComponent/LoadingComponent';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const { v4: uuidv4 } = require('uuid');


export interface direction {
  attributes:{ distance: string, narrative: string }
}

const Directions = ({ id, latitude, longitude }) => {
  const [directions, setDirections] = useState([]);
  const [error, setError] = useState('');
  let directionsCards;

  const getStoryDirections = () => {
    getDirections(id, latitude, longitude)
      // .then((data) => console.log(data.data))
      .then((data) => setDirections(data.data))
      .catch((error) => setError(error));
  };

  useEffect(() => {
    getStoryDirections();
  }, []);

  
  if (directions.length > 0) {
    directionsCards = directions.map((direction:direction) => {
      return <DirectionsCard  key={uuidv4()} direction={direction.attributes} />;
    });
  } else {
    directionsCards = <LoadingComponent />;
  }

  return (
    <article className="directions">
      {directionsCards}
      <div className="button-wrapper">
        <Link to="/">
          <Button variant="outlined" id="homeBtn">TAKE ME HOME</Button>
        </Link>
        <Link to={`/storiesPage/${latitude}/${longitude}`}>
          <Button variant="outlined" id="storiesPageReturn">BACK TO CARDS</Button>
        </Link>
      </div>
    </article>
  )
};

export default Directions;

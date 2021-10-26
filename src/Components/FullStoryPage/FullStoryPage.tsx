import React, { useEffect, useState } from 'react';
import './FullStoryPage.css';
import { getStory } from '../../apiCalls';
import ErrorHandlingCard from '../ErrorHandlingCard/ErrorHandlingCard';
import FullStoryCard from '../FullStoryCard/FullStoryCard';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

interface story {
  distance_in_miles: number ;
  attributes:{distance_in_miles: number} 
}

export const FullStoryPage = ({ id, latitude, longitude }) => {
  const [story, setStory] = useState<story>({
    distance_in_miles:0,
    attributes:{distance_in_miles:0} 
  });

  const [error, setError] = useState('');

  const getSingleStory = () => {
    getStory(id, latitude, longitude)
      .then((data) => setStory(data.data.attributes))
      .catch((error) => setError(error));
  };

  useEffect(() => {
    getSingleStory();
  }, []);

  return (
    <React.Fragment>
      {error && <ErrorHandlingCard errorMessage={error} networkMessage={undefined} directionMessage={undefined} />}
      {story.distance_in_miles > 10 && (
        <ErrorHandlingCard errorMessage={error} networkMessage={undefined} directionMessage={"You are not in range to view this story"} />
      )}
      {story.distance_in_miles <= 10 && <FullStoryCard story={story} />}
      <div className="button-wrapper">
      <Link to="/">
        <Button variant="outlined" id="homeBtn">TAKE ME HOME </Button>
      </Link>
      <Link to={`/storiesPage/${latitude}/${longitude}`}>
        <Button variant="outlined" id="storiesPageReturn">BACK TO CARDS</Button>
      </Link>
      </div>
    </React.Fragment>
  );
};

export default FullStoryPage;

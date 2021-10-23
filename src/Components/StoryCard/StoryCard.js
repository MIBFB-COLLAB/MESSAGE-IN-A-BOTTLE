import './StoryCard.css';
import React, { useState, useEffect, useRef } from 'react';
import Directions from '../Directions/Directions';
import ErrorHandlingCard from '../ErrorHandlingCard/ErrorHandlingCard';
import FullStoryCard from '../FullStoryCard/FullStoryCard';
import { getDirections, getStory } from '../../apiCalls';
import { Button } from '@mui/material';

const StoryCard = ({ id, title, distance }) => {
const [latitude, setLatitude] = useState('');
const [longitude, setLongitude] = useState('');
const [directions, setDirections] = useState('');
const [story, setStory] = useState('');
const [error, setError] = useState('');
const [isLoading, setIsLoading] = useState(false)
const isLocated = useRef(false)

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
    getSingleStory()
  }

  const getSingleStory = () => {
    getStory(id, latitude, longitude)
    .then((data) => setStory(data.data.attributes))
    .catch((error) => setError(error));
    setIsLoading(false)
  };

  const handleDirectionsClick = () => {
    getDirections(id, latitude, longitude)
      .then((data) => setDirections)
      .catch((error) => setError(error));
  };

  useEffect(() => {
    console.log('lat/long', latitude, longitude)
    if (isLocated.current) {
      getSingleStory(id, latitude, longitude)
    } else {
      isLocated.current = true
    }
    // latitude && longitude ? getSingleStory(id, latitude, longitude) : console.log('false')
    // <ErrorHandlingCard errorMessage={error} />
  }, [longitude])

  return (
    <article className="story-card">
      <h3 className="story-title">{title}</h3>
      <p className="story-distance">Distance from story: {distance}</p>
        <Button
          // className="get-directions-btn"
          variant="outlined"
          onClick={() => handleDirectionsClick()}
        >
          GET DIRECTIONS
        </Button>
        <Button 
          // className="view-story-btn" 
          variant="outlined"
          onClick={() => handleClick()}
        >
          VIEW STORY
        </Button>
    </article>
  );
};

export default StoryCard;

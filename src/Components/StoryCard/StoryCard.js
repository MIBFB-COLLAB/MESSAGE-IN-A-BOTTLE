import './StoryCard.css';
import React, { useState, useEffect, useRef } from 'react';
import Directions from '../Directions/Directions';
import ErrorHandlingCard from '../ErrorHandlingCard/ErrorHandlingCard';
import FullStoryCard from '../FullStoryCard/FullStoryCard';
import { LoadingComponent } from '../LoadingComponent/LoadingComponent';
import { getDirections, getStory } from '../../apiCalls';
import { Button } from '@mui/material';
import { Redirect } from 'react-router-dom';

const StoryCard = ({ id, title, distance }) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [directions, setDirections] = useState('');
  const [isStory, setIsStory] = useState(false);
  const [isDirections, setIsDirections] = false;
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

  const handleStoryClick = () => {
    setIsLoading(true);
    setIsStory(true);
    navigator.geolocation.getCurrentPosition(getLocation, catchError);
  };

  const handleDirectionsClick = () => {
    setIsLoading(true);
    setIsDirections(true);
    navigator.geolocation.getCurrentPosition(getLocation, catchError);
  };

  // useEffect(() => {
  //   if (isLocated.current) {
  //     <Redirect to={`/fullStoryPage/${id}/${latitude}/${longitude}`} />
  //   } else {
  //     isLocated.current = true
  //   }
  // }, [longitude])

  return (
    <>
      {!latitude && !longitude && (
        <article className="story-card">
          <h3 className="story-title">{title}</h3>
          <p className="story-distance">
            Distance from story: {distance.toFixed(2)}
          </p>
          <Button
            // className="get-directions-btn"
            variant="outlined"
            type="click"
            onClick={() => handleDirectionsClick()}
          >
            GET DIRECTIONS
          </Button>
          <Button
            // className="view-story-btn"
            variant="outlined"
            type="click"
            onClick={() => handleStoryClick()}
          >
            VIEW STORY
          </Button>
        </article>
      )}
      {latitude && longitude && (
        <Redirect to={`/fullStoryPage/${id}/${latitude}/${longitude}`} />
      )}
    </>
  );
};

export default StoryCard;

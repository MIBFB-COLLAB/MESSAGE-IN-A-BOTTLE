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
  const [isDirections, setIsDirections] = useState(false);
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

  return (
    <>
      {!latitude && !longitude && (
        <article className="story-card">
          <h3 className="story-title">{title}</h3>
          <p className="story-distance">
            Distance from story: {distance.toFixed(2)}
          </p>
          <Button
            variant="outlined"
            type="click"
            onClick={() => handleDirectionsClick()}
          >
            GET DIRECTIONS
          </Button>
          <Button
            variant="outlined"
            type="click"
            onClick={() => handleStoryClick()}
          >
            VIEW STORY
          </Button>
        </article>
      )}
      {latitude && longitude && isStory && (
        <Redirect to={`/fullStoryPage/${id}/${latitude}/${longitude}`} />
      )}
      {latitude && longitude && isDirections && (
        <Redirect to={`/directionsPage/${id}/${latitude}/${longitude}`} />
      )}
    </>
  );
};

export default StoryCard;

import './StoryCard.css';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Redirect } from 'react-router-dom';
// import ErrorHandlingCard from '../ErrorHandlingCard/ErrorHandlingCard';
// import { LoadingComponent } from '../LoadingComponent/LoadingComponent';

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
    <React.Fragment>
      {!latitude && !longitude && (
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minWidth: 275,
            textAlign: 'center',
            backgroundColor: '#f2f0e3',
            alignItems: 'center',
          }}
        >
          <CardContent>
            <Typography variant="h6">
              {title}
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
                {distance.toFixed(2)} Miles to Story
            </Typography>
          </CardContent>
          <CardActions>
            <button
              // href={`directionsPage/${id}/${latitude}/${longitude}`}
              // variant="outlined"
              // type="click"
              onClick={() => handleDirectionsClick()}
            >
              GET DIRECTIONS
            </button>
            <button
              // href="#text-buttons"
              // variant="outlined"
              // type="click"
              onClick={() => handleStoryClick()}
            >
              VIEW STORY
            </button>
          </CardActions>
        </Card>
      )}
      {latitude && longitude && isStory && (
        <Redirect to={`/fullStoryPage/${id}/${latitude}/${longitude}`} />
      )}
      {latitude && longitude && isDirections && (
        <Redirect to={`/directionsPage/${id}/${latitude}/${longitude}`} />
      )}
    </React.Fragment>
  );
};

export default StoryCard;

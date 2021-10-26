import './StoryCard.css';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Redirect } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import ErrorHandlingCard from '../ErrorHandlingCard/ErrorHandlingCard';

const StoryCard = ({ id, title, distance, timeStamp }) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
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
      {error && <ErrorHandlingCard networkMessage errorMessage={error} directionMessage/>}
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
            <Typography variant="h6" id="storyTitle">
              {title}
            </Typography>
            <Typography
              id="timeStamp"
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >Date Written: {timeStamp}
            </Typography>
            <Typography
              id="miles"
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
                {distance.toFixed(2)} Miles to Story
            </Typography>
          </CardContent>
          <CardActions>
            <LoadingButton
            loading={isLoading}
              className="get-directions-btn"
              onClick={() => handleDirectionsClick()}
            >
              GET DIRECTIONS
            </LoadingButton>
          </CardActions>
          <CardActions>
            <LoadingButton
              loading={isLoading}
              className="view-story-btn"
              onClick={() => handleStoryClick()}
            >
              VIEW STORY
            </LoadingButton>
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

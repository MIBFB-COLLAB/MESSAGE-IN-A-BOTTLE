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
    <>
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
            {/* <article className="story-card"> */}
            <Typography variant="h6">
              <h3 className="story-title">{title}</h3>
            </Typography>
            {/* <h3 className="story-title">{title}</h3> */}
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <p className="story-distance">
                {distance.toFixed(2)} Miles to Story
              </p>
            </Typography>
            {/* <p className="story-distance">
            Distance from story: {distance.toFixed(2)}
          </p> */}
          </CardContent>
          <CardActions>
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
            {/* </article> */}
          </CardActions>
        </Card>
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

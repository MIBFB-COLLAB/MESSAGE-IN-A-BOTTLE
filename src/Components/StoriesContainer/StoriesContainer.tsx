import './StoriesContainer.css';
import React, { useEffect, useState } from 'react';
import StoryCard from '../StoryCard/StoryCard';
import { getData } from '../../apiCalls';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const { v4: uuidv4 } = require('uuid');

interface story {
    attributes: { title: string; distance_in_miles: number; created_at: string; };
    id:number,
}

const StoriesContainer = ({ longitude, latitude }) => {
  const [currentStories, setCurrentStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

    /***********************************/
        /* GET STORIES NEAR BY*/
    /**********************************/
  const getStories = () => {
    getData(latitude, longitude)
      .then((data) => setCurrentStories(data.data.stories))
      .catch((error) => setError(error));
  };

  useEffect(() => {
    getStories();
    setIsLoading(true);
  }, []);
    
    /***********************************/
          /* CURRENT STORIES CARD */
    /**********************************/
  const storyCards = currentStories.map((story:story) => {
    const { title, distance_in_miles, created_at } = story.attributes;
    return (
      <StoryCard
        key={uuidv4()}
        id={story.id}
        title={title}
        distance={distance_in_miles}
        timeStamp={created_at}
      />
    );
  });

  return (
    <React.Fragment>
      {currentStories && <div className="stories-container">{storyCards}</div>}
      {currentStories.length === 0 && !isLoading && (
        <div className="stories-error-message">
          We're sorry - there are no messages within 25 miles of your current
          location. Be the first to create a message by clicking the "Submit a
          Story" button above.
        </div>
      )}
      <Link to="/">
        <Button variant="outlined">TAKE ME HOME</Button>
      </Link>
    </React.Fragment>
  );
};

export default StoriesContainer;
import './StoriesContainer.css';
import React, { useEffect, useState } from 'react';
import StoryCard from '../StoryCard/StoryCard';
import { getData } from '../../apiCalls';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const { v4: uuidv4 } = require('uuid');


interface story {
    attributes: { title: string; distance_in_miles: number; };
    id:number,
}

const StoriesContainer = ({ longitude, latitude }) => {
  const [currentStories, setCurrentStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getStories = () => {
    getData(latitude, longitude)
      // .then((data) => console.log(data.data.stories))
      .then((data) => setCurrentStories(data.data.stories))
      .catch((error) => setError(error));
  };

  useEffect(() => {
    getStories();
    setIsLoading(true);
  }, []);

  const storyCards = currentStories.map((story:story) => {
    const { title, distance_in_miles } = story.attributes;
    return (
      <StoryCard
        key={uuidv4()}
        id={story.id}
        title={title}
        distance={distance_in_miles}
      />
    );
  });

  return (
    <section>
      {currentStories && <div className="stories-container">{storyCards}</div>}
      {currentStories.length === 0 && !isLoading && (
        <div className="stories-error-message">
          We're sorry - there are no messages within 25 miles of your current
          location. Be the first to create a message by clicking the "Submit a
          Story" button above.
        </div>
      )}
      <Link to="/">
        <Button>TAKE ME HOME </Button>
      </Link>
    </section>
  );
};

export default StoriesContainer;
import './StoriesContainer.css';
import React, { useEffect, useState } from 'react';
import StoryCard from '../StoryCard/StoryCard';
import { getData } from '../../apiCalls';

const { v4: uuidv4 } = require('uuid');

const StoriesContainer = ({ longitude, latitude }) => {
  const [currentStories, setCurrentStories] = useState([
    {
      id: 1,
      type: 'story',
      attributes: {
        title: 'my cool story',
        message: 'This one time I saw a bird',
        latitude: 13.201,
        longitude: 9.2673,
        distance_in_miles: 1.2,
      },
    },
    {
      id: 2,
      type: 'another story',
      attributes: {
        title: 'my cool second story',
        message: 'This one time I saw another bird',
        latitude: 13.201,
        longitude: 9.2673,
        distance_in_miles: 1.5,
      },
    },
  ]);

  // We are currently console logging the data, we can set state when the data is ready from the BE
  const getStories = () => {
    getData()
      // .then((data) => setCurrentStories(data.data))
      .then((data) => console.log(data));
  };

  useEffect(() => {
    getStories();
  }, []);

  const storyCards = currentStories.map((story) => {
    return (
      <StoryCard
        key={uuidv4()}
        title={story.attributes.title}
        distance={story.attributes.distance_in_miles}
      />
    );
  });

  return <section className="stories-container">{storyCards}</section>;
};

export default StoriesContainer;

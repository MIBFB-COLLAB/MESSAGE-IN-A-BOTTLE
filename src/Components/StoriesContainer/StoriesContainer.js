import './StoriesContainer.css';
import React, { useEffect, useState } from 'react';
import StoryCard from '../StoryCard/StoryCard';
import { getData } from '../../apiCalls';

const { v4: uuidv4 } = require('uuid');

const StoriesContainer = ({ longitude, latitude }) => {
  const [currentStories, setCurrentStories] = useState([]);
  const [error, setError] = useState('');

  const getStories = () => {
    getData()
      .then((data) => setCurrentStories(data.data))
      // .then((data) => console.log(data))
      .catch((error) => setError(error));
  };

  useEffect(() => {
    getStories();
  }, []);

  const storyCards = currentStories.map((story) => {
    return (
      <StoryCard
        key={uuidv4()}
        id={story.id}
        name={story.name}
        title={story.title}
        distance={story.distance_in_miles}
        message={story.message}
      />
    );
  });

  return <section className="stories-container">{storyCards}</section>;
};

export default StoriesContainer;

// Test Data
// [
//   {
//     id: 1,
//     type: 'story',
//     attributes: {
//       title: 'my cool story',
//       message: 'This one time I saw a bird',
//       latitude: 13.201,
//       longitude: 9.2673,
//       distance_in_miles: 1.2,
//     },
//   },
//   {
//     id: 2,
//     type: 'another story',
//     attributes: {
//       title: 'my cool second story',
//       message: 'This one time I saw another bird',
//       latitude: 13.201,
//       longitude: 9.2673,
//       distance_in_miles: 1.5,
//     },
//   },
// ]

// id: 1
// latitude: 123.456892
// location: ""
// longitude: -19.982791
// message: "I once saw a really pretty flower."
// name: "Anonymous"
// title: "My Cool Story!"

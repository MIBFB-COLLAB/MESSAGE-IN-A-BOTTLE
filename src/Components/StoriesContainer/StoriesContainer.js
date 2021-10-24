import './StoriesContainer.css';
import React, { useEffect, useState } from 'react';
import StoryCard from '../StoryCard/StoryCard';
import { getData } from '../../apiCalls';

const { v4: uuidv4 } = require('uuid');

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

  const storyCards = currentStories.map((story) => {
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
    </section>
  );
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

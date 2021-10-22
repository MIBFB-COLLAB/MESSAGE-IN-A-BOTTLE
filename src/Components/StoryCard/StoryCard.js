import './StoryCard.css';
import React, { useState, useEffect } from 'react';
import MicroModal from 'react-micro-modal';
import Directions from '../Directions/Directions';
import ErrorHandlingCard from '../ErrorHandlingCard/ErrorHandlingCard';
import FullStoryCard from '../FullStoryCard/FullStoryCard';
import { getDirections, getStory } from '../../apiCalls';

const StoryCard = ({ id, title, distance, latitude, longitude }) => {
  const [directions, setDirections] = useState('');
  const [story, setStory] = useState('');
  const [error, setError] = useState('');

  const handleDirectionsClick = () => {
    console.log('handlin the click');
    getDirections(id, latitude, longitude)
      // We may need to change how we access the data here depending on data structure
      .then((data) => setDirections)
      // We may need to change how we access the error message here depending on data structure
      .catch((error) => setError(error));
  };

  const getSingleStory = () => {
    console.log('gettin the story');
    getStory(id, latitude, longitude)
    // We may need to change how we access the data here depending on data structure
    .then((data) => console.log(data))
    // We may need to change how we access the error message here depending on data structure
    .catch((error) => setError(error));
  };

  useEffect(() => {
    return <ErrorHandlingCard errorMessage={error} />;
  }, [error]);

  return (
    <article className="story-card">
      <h3 className="story-title">{title}</h3>
      <p className="story-distance">Distance from story: {distance}</p>
      <MicroModal
        trigger={(open) => (
          <div onClick={open}>
            <button
              className="get-directions-btn"
              onClick={() => handleDirectionsClick()}
            >
              GET DIRECTIONS
            </button>
          </div>
        )}
      >
        {(close) => {
          return (
            <article className="directions-modal">
              <Directions title={title} directions={directions} />
            </article>
          );
        }}
      </MicroModal>
      <MicroModal
        trigger={(open) => (
          <div onClick={open}>
            <button className="view-story-btn" onClick={() => getSingleStory()}>
              View Story
            </button>
          </div>
        )}
      >
        {(close) => {
          return (
            <article className="story-modal">
              <FullStoryCard story={story}/>
            </article>
          );
        }}
      </MicroModal>
    </article>
  );
};

export default StoryCard;

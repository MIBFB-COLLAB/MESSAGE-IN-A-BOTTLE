import './StoryCard.css';
import React, { useState, useEffect, useRef } from 'react';
import MicroModal from 'react-micro-modal';
import Directions from '../Directions/Directions';
import ErrorHandlingCard from '../ErrorHandlingCard/ErrorHandlingCard';
import FullStoryCard from '../FullStoryCard/FullStoryCard';
import { getDirections, getStory } from '../../apiCalls';

const StoryCard = ({ id, title, distance }) => {
const [latitude, setLatitude] = useState('');
const [longitude, setLongitude] = useState('');
const [directions, setDirections] = useState('');
const [story, setStory] = useState('');
const [error, setError] = useState('');
const [isLoading, setIsLoading] = useState(false)

  const getLocation = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };

  const catchError = () => {
    setError('Sorry, no position available.');
    console.log(error);
  };

  const handleClick = () => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(getLocation, catchError);
    getSingleStory()
  }

  const getSingleStory = () => {
    console.log('gettin the story');
    getStory(id, latitude, longitude)
    .then((data) => setStory(data.data.attributes))
    .catch((error) => setError(error));
    setIsLoading(false)
  };

  const handleDirectionsClick = () => {
    console.log('handlin the click');
    getDirections(id, latitude, longitude)
      .then((data) => setDirections)
      .catch((error) => setError(error));
  };

  useEffect(() => {
    console.log('latitude', latitude)
    latitude && longitude ? getSingleStory(id, latitude, longitude) : console.log('false')
    // <ErrorHandlingCard errorMessage={error} />
  }, [latitude, longitude])

  useEffect(() => {
    return <ErrorHandlingCard errorMessage={error} />;
  }, [error]);

  {/* conditionally render micromodal with either full story if there's lat/long or error card if not && it's finished loading */}
  return (
    <>
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
              <button className="view-story-btn" onClick={() => handleClick()}>
                View Story
              </button>
            </div>
          )}
        >
          {(close) => {
            // !isLoading && !error
            return (
              // <>
              // { !isLoading && !error && (
                <article className="story-modal">
                  <FullStoryCard story={story}/>
                </article>)
              }
          //     </>
          //     )
          // }
          }
        </MicroModal>
      </article>
    </>
  );
};

export default StoryCard;

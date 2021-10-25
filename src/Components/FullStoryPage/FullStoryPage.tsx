import { useEffect, useState } from 'react';
import './FullStoryPage.css';
import { getStory } from '../../apiCalls';
import ErrorHandlingCard from '../ErrorHandlingCard/ErrorHandlingCard';
import FullStoryCard from '../FullStoryCard/FullStoryCard';

interface story {
  distance_in_miles: number ;
  attributes:{distance_in_miles: number} 
}

export const FullStoryPage = ({ id, latitude, longitude }) => {
  const [story, setStory] = useState<story>({
    distance_in_miles:0,
    attributes:{distance_in_miles:0} 
  });

  const [error, setError] = useState('');

  const getSingleStory = () => {
    getStory(id, latitude, longitude)
      .then((data) => setStory(data.data.attributes))
      .catch((error) => setError(error));
  };

  useEffect(() => {
    getSingleStory();
  }, []);

  return (
    <>
      {error && <ErrorHandlingCard errorMessage={error} networkMessage={undefined} directionMessage={undefined} />}
      {story.distance_in_miles > 10 && (
        <p>You are not within range of this story</p>
      )}
      {story.distance_in_miles <= 10 && <FullStoryCard story={story} />}
    </>
  );
};

export default FullStoryPage;

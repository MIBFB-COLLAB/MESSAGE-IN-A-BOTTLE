import { useEffect, useState } from 'react'
import './FullStoryPage.css';
import { getStory } from '../../apiCalls';
import ErrorHandlingCard from '../ErrorHandlingCard/ErrorHandlingCard';

export const FullStoryPage = ({ id, latitude, longitude }) => {

  const [story, setStory] = useState({})
  const [error, setError] = useState('')

  const getSingleStory = () => {
    getStory(id, latitude, longitude)
    .then((data) => setStory(data.data.attributes))
    .catch((error) => setError(error));
  };

  useEffect(() => {
    console.log('gettin a story')
    getSingleStory()
  }, [])

  return(
    <>
    {error && <ErrorHandlingCard/>}
    {story.distance_in_miles <= 10 && (
      <div>
        Title:{story.title}
        Message:{story.message}
      </div>
    )}
    </>
  )
}

export default FullStoryPage;
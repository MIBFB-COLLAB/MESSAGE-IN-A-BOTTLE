import { useEffect, useState } from 'react'
import './FullStoryPage.css';
import { getStory } from '../../apiCalls';
import ErrorHandlingCard from '../ErrorHandlingCard/ErrorHandlingCard';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'
import FullStoryCard from '../FullStoryCard/FullStoryCard';

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
    {error && <p>Oops, something went wrong! Please go back and try again</p>}
    {story.distance_in_miles > 10 && <p>You are not within range of this story</p>}
    {story.distance_in_miles <= 10 && (
      <FullStoryCard story={story}/>
    )}
    <Link to='/'>TAKE ME HOME</Link>
    </>
  )
}

export default FullStoryPage;
import { useEffect, useState } from 'react'
import './FullStoryPage.css';
import { getStory } from '../../apiCalls';

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
    <div>
      Title:{story.title}
      Message:{story.message}
    </div>
  )
}

export default FullStoryPage;
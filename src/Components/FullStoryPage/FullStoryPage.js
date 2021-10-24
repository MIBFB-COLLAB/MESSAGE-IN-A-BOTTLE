import React from 'react'
import './FullStoryPage.css';
import { getStory } from '../../apiCalls';

export const FullStoryPage = () => {

  // const getSingleStory = () => {
  //   getStory(id, latitude, longitude)
  //   .then((data) => setStory(data.data.attributes))
  //   .catch((error) => setError(error));
  //   setIsLoading(false)
  // };

  return(
    <div>I'm a story page!</div>
  )
}

export default FullStoryPage;
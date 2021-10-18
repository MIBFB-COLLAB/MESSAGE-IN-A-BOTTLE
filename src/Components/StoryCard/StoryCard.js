import './StoryCard.css';
import React, { useState, useEffect } from "react";
import MicroModal from 'react-micro-modal';
import Directions from '../Directions/Directions';
import { getDirections } from '../../apiCalls';

const StoryCard = ({id, title, distance, latitude, longitude}) => {
  const [directions, setDirections] = useState('')
  const [error, setError] = useState('')

  const handleClick = () => {
    getDirections(id, latitude, longitude)
    .then((data) => setDirections)
    .catch((error) => setError(error.message))
  }

  useEffect(() => {
    return (
      <ErrorHandlingCard errorMessage={error}/>
    )
  }, [error])

  return(
    <article className="story-card">
      <h3 className="story-title">{title}</h3>
      <p className="story-distance">Distance from story: {distance}</p>
      <MicroModal 
        trigger={(open) => (
          <div onClick={open}>
            <button className="get-directions-btn" onClick={() => handleClick()}>GET DIRECTIONS</button>
          </div>
      )}>
        {(close) => {
          return (
            <article className="directions-modal">
              <Directions title={title} directions={directions}/>
            </article>
          )
        }}
      </MicroModal>
      <button className="view-story-btn">VIEW STORY</button>
    </article>
  )

}

export default StoryCard;
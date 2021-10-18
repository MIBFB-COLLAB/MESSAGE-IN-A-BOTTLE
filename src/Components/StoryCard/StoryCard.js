import './StoryCard.css';
import React from "react";
import MicroModal from 'react-micro-modal';
import Directions from '../Directions/Directions';

const StoryCard = ({title, distance}) => {
  return(
    <article className="story-card">
      <h3 className="story-title">{title}</h3>
      <p className="story-distance">Distance from story: {distance}</p>
      <MicroModal 
        trigger={(open) => (
          <div onClick={open}>
            <button className="get-directions-btn">GET DIRECTIONS</button>
          </div>
      )}>
        {(close) => {
          return (
            <article className="directions-modal">
              <Directions />
            </article>
          )
        }}
      </MicroModal>
      <button className="view-story-btn">VIEW STORY</button>
    </article>
  )

}

export default StoryCard;
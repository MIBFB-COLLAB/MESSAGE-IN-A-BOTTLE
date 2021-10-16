import './StoryCard.css';
import React from "react"

const StoryCard = ({title, distance}) => {
  return(
    <article className="story-card">
      <h3 className="story-title">{title}</h3>
      <p className="story-distance">Distance from story: {distance}</p>
      <button className="get-directions-btn">GET DIRECTIONS</button>
      <button className="view-story-btn">VIEW STORY</button>
    </article>
  )

}

export default StoryCard;
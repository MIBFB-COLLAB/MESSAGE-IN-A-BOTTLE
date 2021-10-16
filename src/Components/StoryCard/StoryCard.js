import './StoryCard.css';
import React from "react"

const StoryCard = ({title, distance}) => {
  return(
    <article>
      <h3>{title}</h3>
      <p>Distance from story: {distance}</p>
      <button className="get-directions-btn">GET DIRECTIONS</button>
      <button className="view-story-btn">VIEW STORY</button>
    </article>
  )

}

export default StoryCard;
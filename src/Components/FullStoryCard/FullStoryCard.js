import './FullStoryCard.css';
import React from "react"

const FullStoryCard = ({title, story}) => {
  return (
    <article className="full-story-card">
      <h3>{title}</h3>
      <p>{story}</p>
      <button>BACK TO CARD</button>
    </article>
  )
}

export default FullStoryCard;
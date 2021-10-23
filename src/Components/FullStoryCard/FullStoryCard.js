import './FullStoryCard.css';
import React from "react"

const FullStoryCard = ({ story }) => {
  return (
    <article className="full-story-card">
      <h3>Title: {story.title}</h3>
      <p>Message:{story.message}</p>
      <button>BACK TO CARD</button>
    </article>
  )
}

export default FullStoryCard;
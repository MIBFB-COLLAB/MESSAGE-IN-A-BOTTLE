import './FullStoryCard.css';
import React from "react"

const FullStoryCard = ({ story }) => {
  console.log(story)
  return (
    <article className="full-story-card">
      <h3>Title:</h3>
      <p>Message:</p>
      <button>BACK TO CARD</button>
    </article>
  )
}

export default FullStoryCard;
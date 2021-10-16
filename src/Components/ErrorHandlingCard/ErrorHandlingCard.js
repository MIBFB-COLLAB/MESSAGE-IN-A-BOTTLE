import './ErrorHandlingCard.css';
import React from "react"

const ErrorHandlingCard = () => {
  return (
    <article className="error-card">
      <p>OOPS! You're not within range of this story right now</p>
      <button className="directions-button">BACK TO DIRECTIONS</button>
    </article>
  )
};

export default ErrorHandlingCard;
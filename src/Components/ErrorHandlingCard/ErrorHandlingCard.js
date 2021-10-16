import './ErrorHandlingCard.css';
import React from "react"

const ErrorHandlingCard = () => {
  return (
    <div className="error-card">
      <p>OOPS! You're not within range of this story right now</p>
      <button className="directions-button">BACK TO DIRECTIONS</button>
    </div>
  )
};

export default ErrorHandlingCard;
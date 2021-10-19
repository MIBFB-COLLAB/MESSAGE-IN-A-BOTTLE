import './ErrorHandlingCard.css';
import React from "react"

const ErrorHandlingCard = ({ errorMessage }) => {
  console.log(errorMessage)
  return (
    <article className="error-card">
      <p>{errorMessage}</p>
      <button className="directions-button">BACK TO DIRECTIONS</button>
    </article>
  )
};

export default ErrorHandlingCard;
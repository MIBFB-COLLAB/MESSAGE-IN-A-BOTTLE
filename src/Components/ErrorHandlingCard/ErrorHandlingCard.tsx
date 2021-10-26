import './ErrorHandlingCard.css';
import React from "react"
import { Link } from 'react-router-dom'

const ErrorHandlingCard = ({ errorMessage, networkMessage, directionMessage }) => {
  return (
    <React.Fragment>
      {errorMessage && (
        <article className="error-card instructions">
          <p>{errorMessage}</p>
          <Link to='/' className="home-button">TAKE ME HOME</Link>
        </article>
      )}
      {networkMessage && (
        <article className="error-card instructions">
          <p>{networkMessage}</p>
          <Link to='/' className="home-button">TAKE ME HOME</Link>
        </article>
      )}
      {directionMessage && (
        <article className="error-card instructions">
          <p>{directionMessage}</p>
          <Link to='/' className="home-button">TAKE ME HOME</Link>
        </article>
      )}
    </React.Fragment>
  )
};

export default ErrorHandlingCard;
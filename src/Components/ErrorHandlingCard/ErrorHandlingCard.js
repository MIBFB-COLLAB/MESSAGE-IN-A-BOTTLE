import './ErrorHandlingCard.css';
import React from "react"

const ErrorHandlingCard = ({ errorMessage, networkMessage, directionMessage }) => {
  return (
    <>
    {errorMessage && (
      <article className="error-card">
        <p>{errorMessage}</p>
        <Link to='/' className="home-button">TAKE ME HOME</Link>
      </article>
    )}
    {networkMessage && (
      <article className="error-card">
        <p>{networkMessage}</p>
        <Link to='/' className="home-button">TAKE ME HOME</Link>
      </article>
    )}
    {directionMessage && (
      <article className="error-card">
        <p>{directionMessage}</p>
        <Link to='/' className="home-button">TAKE ME HOME</Link>
      </article>
    )}
    </>
  )
};

export default ErrorHandlingCard;
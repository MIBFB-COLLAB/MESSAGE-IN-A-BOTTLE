import './ErrorHandlingPage.css';
import React from "react"
import { Link } from 'react-router-dom'

const ErrorHandlingPage = ({ errorMessage }) => {
  console.log(errorMessage)
  return (
    <div className="error-page">
      <p>{errorMessage}</p>
      <Link to='/'>
        Take Me Home
      </Link>
    </div>
  )
};

export default ErrorHandlingPage;
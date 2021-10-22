import './ErrorHandlingPage.css';
import React from "react"
import { Link } from 'react-router-dom'

const ErrorHandlingPage = () => {
  return (
    <div className="error-page">
      <p className="error-message">Whoops, something went wrong!</p>
      <Link to='/' className="error-page-home-link">
        Take Me Home
      </Link>
    </div>
  )
};

export default ErrorHandlingPage;
import './ErrorHandlingPage.css';
import React from "react"
import { Link } from 'react-router-dom'

const ErrorHandlingPage = () => {
  return (
    <div className="error-page">
      <p>Whoops, something went wrong!</p>
      <Link to='/'>
        Take Me Home
      </Link>
    </div>
  )
};

export default ErrorHandlingPage;